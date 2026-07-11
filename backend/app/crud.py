from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List, Optional
import datetime
from math import radians, cos, sin, asin, sqrt

from app import models, schemas
from app.auth import get_password_hash
from app.metrics import PAYMENTS_TOTAL

# Helper for Haversine distance
def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    # Convert decimal degrees to radians 
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    # Haversine formula 
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    r = 6371 # Radius of earth in kilometers
    return c * r

# User CRUD
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user_in: schemas.UserCreate):
    db_user = models.User(
        email=user_in.email,
        password_hash=get_password_hash(user_in.password),
        name=user_in.name,
        role=user_in.role,
        diet=user_in.diet or [],
        allergies=user_in.allergies or []
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, db_user: models.User, user_in: schemas.UserUpdate):
    if user_in.name is not None:
        db_user.name = user_in.name
    if user_in.role is not None:
        db_user.role = user_in.role
    if user_in.diet is not None:
        db_user.diet = user_in.diet
    if user_in.allergies is not None:
        db_user.allergies = user_in.allergies
    db.commit()
    db.refresh(db_user)
    return db_user

# Meal CRUD
def get_meal(db: Session, meal_id: int):
    return db.query(models.Meal).filter(models.Meal.id == meal_id).first()

def create_meal(db: Session, meal_in: schemas.MealCreate, cook_id: int):
    db_meal = models.Meal(
        cook_id=cook_id,
        title=meal_in.title,
        description=meal_in.description,
        max_guests=meal_in.max_guests,
        current_guests=0,
        total_price_estimate=meal_in.total_price_estimate,
        calculated_price_per_person=meal_in.total_price_estimate, # Initial price when 0 guests
        datetime=meal_in.datetime,
        address=meal_in.address,
        lat=meal_in.lat,
        lng=meal_in.lng,
        allergens=meal_in.allergens or [],
        status="active"
    )
    db.add(db_meal)
    db.commit()
    db.refresh(db_meal)
    return db_meal

def update_meal(db: Session, db_meal: models.Meal, meal_in: schemas.MealUpdate):
    for field, value in meal_in.dict(exclude_unset=True).items():
        setattr(db_meal, field, value)
    
    # Recalculate price if total_price_estimate was updated
    if meal_in.total_price_estimate is not None or meal_in.max_guests is not None:
        recalculate_meal_costs(db, db_meal)
        
    db.commit()
    db.refresh(db_meal)
    return db_meal

def get_meals(
    db: Session, 
    skip: int = 0, 
    limit: int = 100, 
    lat: Optional[float] = None, 
    lng: Optional[float] = None, 
    max_dist_km: Optional[float] = None,
    allergens_exclude: Optional[List[str]] = None,
    diet: Optional[str] = None
):
    query = db.query(models.Meal).filter(models.Meal.status == "active")
    
    # Filter out past meals
    now = datetime.datetime.utcnow()
    query = query.filter(models.Meal.datetime >= now)
    
    meals = query.all()
    filtered_meals = []
    
    for meal in meals:
        # 1. Allergens filtering
        if allergens_exclude:
            meal_allergens = meal.allergens or []
            if any(allergen in meal_allergens for allergen in allergens_exclude):
                continue
                
        # 2. Diet filtering
        if diet:
            desc = (meal.description or "").lower()
            title = meal.title.lower()
            if diet.lower() not in desc and diet.lower() not in title:
                continue
                
        # 3. Distance filtering
        if lat is not None and lng is not None and max_dist_km is not None:
            dist = haversine_distance(lat, lng, meal.lat, meal.lng)
            if dist > max_dist_km:
                continue
                
        filtered_meals.append(meal)
        
    # Apply pagination on filtered list
    return filtered_meals[skip : skip + limit]

# Recalculate cost sharing
def recalculate_meal_costs(db: Session, meal: models.Meal):
    active_participations = db.query(models.Participation).filter(
        models.Participation.meal_id == meal.id,
        models.Participation.status.in_(["booked", "confirmed"])
    ).all()
    
    num_guests = len(active_participations)
    meal.current_guests = num_guests
    
    if num_guests > 0:
        # total cost is split among guests
        price_per_person = meal.total_price_estimate / num_guests
    else:
        # if 0 guests, the price per person is just the total estimated cost
        price_per_person = meal.total_price_estimate
        
    meal.calculated_price_per_person = price_per_person
    
    # Update amount due for each guest
    for part in active_participations:
        part.amount_due = price_per_person
        
    db.commit()

# Participation CRUD
def create_participation(db: Session, meal_id: int, guest_id: int):
    meal = db.query(models.Meal).filter(models.Meal.id == meal_id).first()
    if not meal:
        return None
        
    # Check if already booked
    existing = db.query(models.Participation).filter(
        models.Participation.meal_id == meal_id,
        models.Participation.guest_id == guest_id
    ).first()
    
    if existing:
        if existing.status == "cancelled":
            existing.status = "booked"
            db.commit()
            recalculate_meal_costs(db, meal)
            return existing
        return existing
        
    participation = models.Participation(
        meal_id=meal_id,
        guest_id=guest_id,
        status="booked",
        amount_due=meal.calculated_price_per_person
    )
    db.add(participation)
    db.commit()
    
    # Recalculate costs
    recalculate_meal_costs(db, meal)
    db.refresh(participation)
    return participation

def cancel_participation(db: Session, meal_id: int, guest_id: int):
    participation = db.query(models.Participation).filter(
        models.Participation.meal_id == meal_id,
        models.Participation.guest_id == guest_id,
        models.Participation.status.in_(["booked", "confirmed"])
    ).first()
    
    if not participation:
        return False
        
    participation.status = "cancelled"
    participation.amount_due = 0.0
    db.commit()
    
    # Recalculate costs
    meal = db.query(models.Meal).filter(models.Meal.id == meal_id).first()
    if meal:
        recalculate_meal_costs(db, meal)
        
    return True

def pay_participation(db: Session, participation_id: int):
    participation = db.query(models.Participation).filter(
        models.Participation.id == participation_id,
        models.Participation.status == "booked"
    ).first()
    if not participation:
        return None
        
    participation.status = "confirmed"
    db.commit()
    db.refresh(participation)
    PAYMENTS_TOTAL.labels(status="success").inc()
    return participation

# Message CRUD
def create_message(db: Session, meal_id: int, sender_id: int, content: str):
    db_msg = models.Message(
        meal_id=meal_id,
        sender_id=sender_id,
        content=content
    )
    db.add(db_msg)
    db.commit()
    db.refresh(db_msg)
    return db_msg

def get_messages(db: Session, meal_id: int):
    return db.query(models.Message).filter(models.Message.meal_id == meal_id).order_by(models.Message.created_at.asc()).all()

# Rating CRUD
def create_rating(db: Session, rating_in: schemas.RatingCreate, reviewer_id: int):
    # Create rating
    db_rating = models.Rating(
        meal_id=rating_in.meal_id,
        reviewer_id=reviewer_id,
        reviewee_id=rating_in.reviewee_id,
        rating=rating_in.rating,
        comment=rating_in.comment,
        rating_type=rating_in.rating_type
    )
    db.add(db_rating)
    db.commit()
    db.refresh(db_rating)
    
    # Recalculate average rating of reviewee
    avg_rating = db.query(func.avg(models.Rating.rating)).filter(
        models.Rating.reviewee_id == rating_in.reviewee_id
    ).scalar()
    
    if avg_rating is not None:
        user = db.query(models.User).filter(models.User.id == rating_in.reviewee_id).first()
        if user:
            user.average_rating = round(float(avg_rating), 2)
            db.commit()
            
    return db_rating

# Admin Metrics
def get_admin_metrics(db: Session, active_ws_count: int) -> schemas.AdminMetricsResponse:
    total_users = db.query(models.User).count()
    total_meals = db.query(models.Meal).count()
    total_reservations = db.query(models.Participation).filter(
        models.Participation.status.in_(["booked", "confirmed"])
    ).count()
    
    # Sum of estimates for active/completed meals
    total_costs_shared = db.query(func.sum(models.Meal.total_price_estimate)).filter(
        models.Meal.current_guests > 0
    ).scalar() or 0.0
    
    return schemas.AdminMetricsResponse(
        total_users=total_users,
        total_meals=total_meals,
        total_reservations=total_reservations,
        active_websockets=active_ws_count,
        total_costs_shared=round(float(total_costs_shared), 2)
    )

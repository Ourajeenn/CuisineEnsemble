import datetime
import json
from app.database import SessionLocal, engine
from app.models import User, Meal, Rating
from app.auth import get_password_hash

def populate():
    db = SessionLocal()
    try:
        # Check if users already exist
        if db.query(User).filter(User.email == "sophie@example.com").first():
            print("Mock data already populated!")
            return

        # Hash passwords
        p_hash = get_password_hash("pass123")

        # Create cooks
        sophie = User(
            email="sophie@example.com",
            password_hash=p_hash,
            name="Sophie Gourmande",
            role="cook",
            diet=["Végétarien"],
            allergies=["Arachides"],
            average_rating=4.8
        )
        jean = User(
            email="jean@example.com",
            password_hash=p_hash,
            name="Jean Gastronome",
            role="cook",
            diet=[],
            allergies=[],
            average_rating=4.9
        )
        marie = User(
            email="marie@example.com",
            password_hash=p_hash,
            name="Marie Bio",
            role="cook",
            diet=["Végan", "Végétarien"],
            allergies=["Lactose", "Gluten"],
            average_rating=4.7
        )

        db.add_all([sophie, jean, marie])
        db.commit()
        db.refresh(sophie)
        db.refresh(jean)
        db.refresh(marie)

        # Create meals
        tomorrow = datetime.datetime.utcnow() + datetime.timedelta(days=1)
        
        m1 = Meal(
            cook_id=sophie.id,
            title="🥘 Paella Végétarienne du Dimanche",
            description="Une paella généreuse avec des légumes bio du marché, du safran espagnol et du riz bomba de qualité. Ambiance conviviale garantie !",
            max_guests=6,
            current_guests=0,
            total_price_estimate=42.0,
            calculated_price_per_person=42.0,
            datetime=tomorrow,
            address="12 Rue de l'Yvette, 45160 Olivet",
            lat=47.8384,
            lng=1.9362,
            allergens=["Lactose"],
            status="active"
        )
        
        m2 = Meal(
            cook_id=jean.id,
            title="🥞 Crêpes & Galettes bretonnes",
            description="Soirée galettes de sarrasin au beurre salé avec garnitures au choix (chèvre, miel, œuf, jambon) suivies de crêpes sucrées à volonté !",
            max_guests=4,
            current_guests=0,
            total_price_estimate=24.0,
            calculated_price_per_person=24.0,
            datetime=tomorrow + datetime.timedelta(hours=2),
            address="8 Rue des Fleurs, 45160 Olivet",
            lat=47.8420,
            lng=1.9450,
            allergens=["Gluten", "Lactose"],
            status="active"
        )

        m3 = Meal(
            cook_id=marie.id,
            title="🍲 Ramen Vegan réconfortant",
            description="Bouillon maison mijoté pendant 12 heures, nouilles fraîches, tofu mariné au soja, champignons shiitake et légumes de saison croquants.",
            max_guests=5,
            current_guests=0,
            total_price_estimate=35.0,
            calculated_price_per_person=35.0,
            datetime=tomorrow + datetime.timedelta(days=1),
            address="45 Avenue de l'Orléanais, 45160 Olivet",
            lat=47.8550,
            lng=1.9280,
            allergens=["Gluten"],
            status="active"
        )

        m4 = Meal(
            cook_id=jean.id,
            title="🍔 Burgers Artisanaux & Frites Maison",
            description="Pain brioché local, viande de bœuf charolaise (ou galette veggie), sauce secrète du chef et frites double cuisson d'inspiration belge.",
            max_guests=4,
            current_guests=0,
            total_price_estimate=32.0,
            calculated_price_per_person=32.0,
            datetime=tomorrow + datetime.timedelta(days=2),
            address="15 Place du Martroi, 45000 Orléans",
            lat=47.9029,
            lng=1.9090,
            allergens=["Gluten", "Lactose"],
            status="active"
        )

        db.add_all([m1, m2, m3, m4])
        db.commit()

        # Add some ratings for these cooks
        r1 = Rating(
            meal_id=1,  # Dummy, doesn't enforce FK strictly if we don't care, but let's make it match
            reviewer_id=sophie.id,
            reviewee_id=jean.id,
            rating=5,
            comment="Les crêpes de Jean sont tout simplement divines, je recommande vivement !",
            rating_type="cook_rating"
        )
        r2 = Rating(
            meal_id=1,
            reviewer_id=jean.id,
            reviewee_id=sophie.id,
            rating=5,
            comment="Très bon moment passé ensemble, Sophie est une hôte formidable !",
            rating_type="cook_rating"
        )
        db.add_all([r1, r2])
        db.commit()

        print("Successfully populated database with beautiful mock meals and cooks!")

    finally:
        db.close()

if __name__ == "__main__":
    populate()

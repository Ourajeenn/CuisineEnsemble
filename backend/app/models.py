import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    role = Column(String, default="guest") # "cook", "guest", "admin"
    diet = Column(JSON, default=[]) # e.g. ["Végétarien"]
    allergies = Column(JSON, default=[]) # e.g. ["Gluten"]
    average_rating = Column(Float, default=0.0)

    # Relationships
    meals_hosted = relationship("Meal", back_populates="cook")
    participations = relationship("Participation", back_populates="guest")
    messages_sent = relationship("Message", back_populates="sender")
    ratings_given = relationship("Rating", foreign_keys="Rating.reviewer_id", back_populates="reviewer")
    ratings_received = relationship("Rating", foreign_keys="Rating.reviewee_id", back_populates="reviewee")

class Meal(Base):
    __tablename__ = "meals"

    id = Column(Integer, primary_key=True, index=True)
    cook_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(String)
    max_guests = Column(Integer, default=5)
    current_guests = Column(Integer, default=0)
    total_price_estimate = Column(Float, nullable=False)
    calculated_price_per_person = Column(Float, nullable=False)
    datetime = Column(DateTime, nullable=False)
    address = Column(String, nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    allergens = Column(JSON, default=[]) # e.g. ["Lactose", "Arachides"]
    status = Column(String, default="active") # "active", "completed", "cancelled"

    # Relationships
    cook = relationship("User", back_populates="meals_hosted")
    participations = relationship("Participation", back_populates="meal", cascade="all, delete-orphan")
    messages = relationship("Message", back_populates="meal", cascade="all, delete-orphan")
    ratings = relationship("Rating", back_populates="meal", cascade="all, delete-orphan")

class Participation(Base):
    __tablename__ = "participations"

    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey("meals.id"), nullable=False)
    guest_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    status = Column(String, default="booked") # "booked", "confirmed", "cancelled"
    amount_due = Column(Float, default=0.0)

    # Relationships
    meal = relationship("Meal", back_populates="participations")
    guest = relationship("User", back_populates="participations")

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey("meals.id"), nullable=False)
    sender_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    # Relationships
    meal = relationship("Meal", back_populates="messages")
    sender = relationship("User", back_populates="messages_sent")

class Rating(Base):
    __tablename__ = "ratings"

    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey("meals.id"), nullable=False)
    reviewer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    reviewee_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    rating = Column(Integer, nullable=False) # 1 to 5
    comment = Column(String)
    rating_type = Column(String, nullable=False) # "cook_rating" or "guest_rating"

    # Relationships
    meal = relationship("Meal", back_populates="ratings")
    reviewer = relationship("User", foreign_keys=[reviewer_id], back_populates="ratings_given")
    reviewee = relationship("User", foreign_keys=[reviewee_id], back_populates="ratings_received")

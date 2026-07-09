from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
import datetime as dt_module

# Token Schemas
class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str

class TokenPayload(BaseModel):
    sub: Optional[int] = None

# User Schemas
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserBase(BaseModel):
    email: EmailStr
    name: str
    role: str = "guest"  # "cook", "guest", "admin"
    diet: Optional[List[str]] = []
    allergies: Optional[List[str]] = []

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[str] = None
    diet: Optional[List[str]] = None
    allergies: Optional[List[str]] = None

class UserResponse(UserBase):
    id: int
    average_rating: float = 0.0

    class Config:
        from_attributes = True

# Meal Schemas
class MealBase(BaseModel):
    title: str
    description: Optional[str] = None
    max_guests: int = Field(..., gt=0)
    total_price_estimate: float = Field(..., gt=0)
    datetime: dt_module.datetime
    address: str
    lat: float
    lng: float
    allergens: Optional[List[str]] = []

class MealCreate(MealBase):
    pass

class MealUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    max_guests: Optional[int] = None
    total_price_estimate: Optional[float] = None
    datetime: Optional[dt_module.datetime] = None
    address: Optional[str] = None
    lat: Optional[float] = None
    lng: Optional[float] = None
    allergens: Optional[List[str]] = None
    status: Optional[str] = None

class MealResponse(MealBase):
    id: int
    cook_id: int
    current_guests: int
    calculated_price_per_person: float
    status: str
    cook: UserResponse

    class Config:
        from_attributes = True

# Participation Schemas
class ParticipationCreate(BaseModel):
    meal_id: int

class ParticipationResponse(BaseModel):
    id: int
    meal_id: int
    guest_id: int
    status: str
    amount_due: float
    guest: UserResponse

    class Config:
        from_attributes = True

# Message Schemas
class MessageCreate(BaseModel):
    content: str

class MessageResponse(BaseModel):
    id: int
    meal_id: int
    sender_id: int
    content: str
    created_at: dt_module.datetime
    sender: UserResponse

    class Config:
        from_attributes = True

# Rating Schemas
class RatingCreate(BaseModel):
    meal_id: int
    reviewee_id: int
    rating: int = Field(..., ge=1, le=5)
    comment: Optional[str] = None
    rating_type: str # "cook_rating" or "guest_rating"

class RatingResponse(BaseModel):
    id: int
    meal_id: int
    reviewer_id: int
    reviewee_id: int
    rating: int
    comment: Optional[str]
    rating_type: str

    class Config:
        from_attributes = True

# Metrics
class AdminMetricsResponse(BaseModel):
    total_users: int
    total_meals: int
    total_reservations: int
    active_websockets: int
    total_costs_shared: float

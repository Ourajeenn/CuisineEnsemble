import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import datetime

from app.main import app
from app.database import Base, get_db
from app.config import settings

# Test database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="module")
def db():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)

@pytest.fixture(scope="module")
def client(db):
    def override_get_db():
        try:
            yield db
        finally:
            pass
    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()

def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"

def test_auth_workflow(client):
    # 1. Register cook
    cook_data = {
        "email": "cook@example.com",
        "name": "Jean Cuisinier",
        "password": "strongpassword123",
        "role": "cook",
        "diet": ["Omnivore"],
        "allergies": []
    }
    response = client.post(f"{settings.API_V1_STR}/auth/register", json=cook_data)
    assert response.status_code == 201
    assert response.json()["email"] == "cook@example.com"
    assert response.json()["role"] == "cook"
    
    # 2. Register guest
    guest_data = {
        "email": "guest1@example.com",
        "name": "Alice Convive",
        "password": "guestpassword123",
        "role": "guest",
        "diet": ["Végétarien"],
        "allergies": ["Gluten"]
    }
    response = client.post(f"{settings.API_V1_STR}/auth/register", json=guest_data)
    assert response.status_code == 201

    # 3. Register second guest
    guest2_data = {
        "email": "guest2@example.com",
        "name": "Bob Convive",
        "password": "guestpassword123",
        "role": "guest",
        "diet": ["Végétarien"],
        "allergies": []
    }
    response = client.post(f"{settings.API_V1_STR}/auth/register", json=guest2_data)
    assert response.status_code == 201

    # 4. Login cook
    login_data = {
        "email": "cook@example.com",
        "password": "strongpassword123"
    }
    response = client.post(f"{settings.API_V1_STR}/auth/login", json=login_data)
    assert response.status_code == 200
    tokens = response.json()
    assert "access_token" in tokens
    assert "refresh_token" in tokens

def test_meals_and_cost_split_workflow(client):
    # 1. Login Cook & Get Access Token
    response = client.post(f"{settings.API_V1_STR}/auth/login", json={
        "email": "cook@example.com",
        "password": "strongpassword123"
    })
    cook_token = response.json()["access_token"]
    headers_cook = {"Authorization": f"Bearer {cook_token}"}
    
    # 2. Propose Meal
    tomorrow = (datetime.datetime.utcnow() + datetime.timedelta(days=1)).isoformat()
    meal_data = {
        "title": "Paella Royale",
        "description": "Excellente paella avec fruits de mer frais de saison.",
        "max_guests": 4,
        "total_price_estimate": 40.0,
        "datetime": tomorrow,
        "address": "10 Rue de la Paix, 75002 Paris",
        "lat": 48.868,
        "lng": 2.332,
        "allergens": ["Crustacés"]
    }
    response = client.post(f"{settings.API_V1_STR}/meals", json=meal_data, headers=headers_cook)
    assert response.status_code == 201
    meal_id = response.json()["id"]
    assert response.json()["calculated_price_per_person"] == 40.0 # Initially, price is the full estimate since no guests

    # 3. Read Meals (with geolocation filtering)
    # Target coordinate close to the meal (lat 48.868, lng 2.332)
    response = client.get(f"{settings.API_V1_STR}/meals?lat=48.869&lng=2.333&max_dist_km=5")
    assert response.status_code == 200
    assert len(response.json()) == 1
    assert response.json()[0]["title"] == "Paella Royale"

    # Filter with allergen exclusion
    response = client.get(f"{settings.API_V1_STR}/meals?allergens_exclude=Crustacés")
    assert response.status_code == 200
    assert len(response.json()) == 0 # Excluded because Paella has Crustacés

    # 4. First Guest books
    response = client.post(f"{settings.API_V1_STR}/auth/login", json={
        "email": "guest1@example.com",
        "password": "guestpassword123"
    })
    guest1_token = response.json()["access_token"]
    headers_guest1 = {"Authorization": f"Bearer {guest1_token}"}

    response = client.post(f"{settings.API_V1_STR}/participations", json={"meal_id": meal_id}, headers=headers_guest1)
    assert response.status_code == 201
    assert response.json()["amount_due"] == 40.0

    # Verify meal price is updated (40.0 EUR / 1 guest = 40.0 EUR)
    response = client.get(f"{settings.API_V1_STR}/meals/{meal_id}")
    assert response.json()["current_guests"] == 1
    assert response.json()["calculated_price_per_person"] == 40.0

    # 5. Second Guest books
    response = client.post(f"{settings.API_V1_STR}/auth/login", json={
        "email": "guest2@example.com",
        "password": "guestpassword123"
    })
    guest2_token = response.json()["access_token"]
    headers_guest2 = {"Authorization": f"Bearer {guest2_token}"}

    response = client.post(f"{settings.API_V1_STR}/participations", json={"meal_id": meal_id}, headers=headers_guest2)
    assert response.status_code == 201

    # Verify meal price is updated in real time (40.0 EUR / 2 guests = 20.0 EUR)
    response = client.get(f"{settings.API_V1_STR}/meals/{meal_id}")
    assert response.json()["current_guests"] == 2
    assert response.json()["calculated_price_per_person"] == 20.0

    # Verify guest1's amount_due has also split to 20.0 in real-time
    response = client.get(f"{settings.API_V1_STR}/participations/meals/{meal_id}", headers=headers_guest1)
    assert response.status_code == 200
    assert len(response.json()) == 2
    assert response.json()[0]["amount_due"] == 20.0
    assert response.json()[1]["amount_due"] == 20.0

    # 6. Guest 2 cancels reservation
    response = client.delete(f"{settings.API_V1_STR}/participations/meals/{meal_id}", headers=headers_guest2)
    assert response.status_code == 200
    
    # Verify meal price goes back to 40.0 EUR (40.0 EUR / 1 guest = 40.0 EUR)
    response = client.get(f"{settings.API_V1_STR}/meals/{meal_id}")
    assert response.json()["current_guests"] == 1
    assert response.json()["calculated_price_per_person"] == 40.0

def test_ratings_workflow(client):
    # Retrieve user IDs and meal ID
    response = client.post(f"{settings.API_V1_STR}/auth/login", json={
        "email": "cook@example.com",
        "password": "strongpassword123"
    })
    cook_token = response.json()["access_token"]
    headers_cook = {"Authorization": f"Bearer {cook_token}"}

    response = client.get(f"{settings.API_V1_STR}/users/me", headers=headers_cook)
    cook_id = response.json()["id"]

    response = client.post(f"{settings.API_V1_STR}/auth/login", json={
        "email": "guest1@example.com",
        "password": "guestpassword123"
    })
    guest_token = response.json()["access_token"]
    headers_guest = {"Authorization": f"Bearer {guest_token}"}

    response = client.get(f"{settings.API_V1_STR}/users/me", headers=headers_guest)
    guest_id = response.json()["id"]

    # Let's read the meal ID
    response = client.get(f"{settings.API_V1_STR}/meals")
    meal_id = response.json()[0]["id"]

    # Guest 1 rates Cook
    rating_data = {
        "meal_id": meal_id,
        "reviewee_id": cook_id,
        "rating": 5,
        "comment": "Super repas, cuisinier très sympa !",
        "rating_type": "cook_rating"
    }
    response = client.post(f"{settings.API_V1_STR}/ratings", json=rating_data, headers=headers_guest)
    assert response.status_code == 201
    assert response.json()["rating"] == 5

    # Verify cook's rating is updated
    response = client.get(f"{settings.API_V1_STR}/users/me", headers=headers_cook)
    assert response.json()["average_rating"] == 5.0

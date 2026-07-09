import datetime
from app.database import SessionLocal, engine, Base
from app.models import User, Meal, Rating, Participation, Message
from app.auth import get_password_hash

def populate():
    # Reset database (drop and recreate all tables)
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
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
        
        # We also need chef@test.com from before so we can log in as him
        chef = User(
            email="chef@test.com",
            password_hash=p_hash,
            name="Marc Chef",
            role="cook",
            diet=[],
            allergies=[],
            average_rating=5.0
        )
        
        # And some guests
        alice = User(
            email="alice@test.com",
            password_hash=p_hash,
            name="Alice",
            role="guest",
            diet=[],
            allergies=[]
        )
        bob = User(
            email="bob@test.com",
            password_hash=p_hash,
            name="Bob",
            role="guest",
            diet=[],
            allergies=[]
        )

        db.add_all([sophie, jean, marie, chef, alice, bob])
        db.commit()
        db.refresh(sophie)
        db.refresh(jean)
        db.refresh(marie)
        db.refresh(chef)
        db.refresh(alice)
        db.refresh(bob)

        # Create meals
        tomorrow = datetime.datetime.now(datetime.UTC) + datetime.timedelta(days=1)
        
        # PARIS MEALS (close to default Paris coords 48.8566, 2.3522)
        m1 = Meal(
            cook_id=sophie.id,
            title="🥘 Paella Végétarienne du Dimanche",
            description="Une paella généreuse avec des légumes bio du marché, du safran espagnol et du riz bomba de qualité. Ambiance conviviale garantie !",
            max_guests=6,
            current_guests=1,
            total_price_estimate=42.0,
            calculated_price_per_person=21.0,
            datetime=tomorrow,
            address="12 Rue de Rivoli, 75004 Paris",
            lat=48.8560,
            lng=2.3530,
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
            address="8 Boulevard Saint-Germain, 75005 Paris",
            lat=48.8500,
            lng=2.3450,
            allergens=["Gluten", "Lactose"],
            status="active"
        )

        m3 = Meal(
            cook_id=marie.id,
            title="🍲 Ramen Vegan réconfortant",
            description="Bouillon maison mijoté pendant 12 heures, nouilles fraîches, tofu mariné au soja, champignons shiitake et légumes de saison croquants.",
            max_guests=5,
            current_guests=2,
            total_price_estimate=45.0,
            calculated_price_per_person=15.0,
            datetime=tomorrow + datetime.timedelta(days=1),
            address="45 Avenue de la République, 75011 Paris",
            lat=48.8650,
            lng=2.3680,
            allergens=["Gluten"],
            status="active"
        )

        m4 = Meal(
            cook_id=chef.id,
            title="🍔 Burgers Artisanaux & Frites Maison",
            description="Pain brioché local, viande de bœuf charolaise (ou galette veggie), sauce secrète du chef et frites double cuisson d'inspiration belge.",
            max_guests=4,
            current_guests=0,
            total_price_estimate=32.0,
            calculated_price_per_person=32.0,
            datetime=tomorrow + datetime.timedelta(days=2),
            address="10 Rue de la Paix, 75002 Paris",
            lat=48.8680,
            lng=2.3320,
            allergens=["Gluten", "Lactose"],
            status="active"
        )

        # OLIVET / ORLEANS MEALS (close to Olivet coords 47.8384, 1.9362)
        m5 = Meal(
            cook_id=sophie.id,
            title="🥗 Salade Gourmande & Tarte Tatin",
            description="Salade de chèvre chaud au miel d'Olivet, followed by a warm, caramelized traditional tarte tatin with cream.",
            max_guests=6,
            current_guests=0,
            total_price_estimate=36.0,
            calculated_price_per_person=36.0,
            datetime=tomorrow,
            address="12 Rue de l'Yvette, 45160 Olivet",
            lat=47.8384,
            lng=1.9362,
            allergens=["Lactose", "Gluten"],
            status="active"
        )

        db.add_all([m1, m2, m3, m4, m5])
        db.commit()
        db.refresh(m1)
        db.refresh(m3)

        # Add participations to split costs
        # m1 has 1 guest (alice) + cook = 2 people (cost split: 42 / 2 = 21.0)
        p1 = Participation(
            meal_id=m1.id,
            guest_id=alice.id,
            status="booked",
            amount_due=21.0
        )
        # m3 has 2 guests (alice, bob) + cook = 3 people (cost split: 45 / 3 = 15.0)
        p2 = Participation(
            meal_id=m3.id,
            guest_id=alice.id,
            status="booked",
            amount_due=15.0
        )
        p3 = Participation(
            meal_id=m3.id,
            guest_id=bob.id,
            status="booked",
            amount_due=15.0
        )
        db.add_all([p1, p2, p3])
        db.commit()

        # Add some ratings for these cooks
        r1 = Rating(
            meal_id=m1.id,
            reviewer_id=alice.id,
            reviewee_id=sophie.id,
            rating=5,
            comment="La paella de Sophie est un régal absolu. Super ambiance !",
            rating_type="cook_rating"
        )
        r2 = Rating(
            meal_id=m2.id,
            reviewer_id=bob.id,
            reviewee_id=jean.id,
            rating=5,
            comment="Les crêpes sont délicieuses et le cidre est excellent !",
            rating_type="cook_rating"
        )
        db.add_all([r1, r2])
        db.commit()

        # Add some messages in the chat of m3
        msg1 = Message(
            meal_id=m3.id,
            sender_id=alice.id,
            content="Bonjour tout le monde ! J'ai hâte de déguster ce ramen vegan."
        )
        msg2 = Message(
            meal_id=m3.id,
            sender_id=marie.id,
            content="Bienvenue Alice ! Le bouillon commence déjà à mijoter."
        )
        db.add_all([msg1, msg2])
        db.commit()

        print("Successfully reset database and populated with Paris & Olivet mock data!")

    finally:
        db.close()

if __name__ == "__main__":
    populate()

from prometheus_client import Counter, Gauge, Histogram

# Prometheus metrics for CuisineEnsemble
MEALS_CREATED = Counter(
    "cuisine_ensemble_meals_created_total", 
    "Nombre total de repas crees"
)

BOOKINGS_TOTAL = Counter(
    "cuisine_ensemble_bookings_total", 
    "Nombre total de reservations",
    ["status"] # "booked", "cancelled"
)

ACTIVE_CHAT_CONNECTIONS = Gauge(
    "cuisine_ensemble_active_chat_connections",
    "Nombre de connexions WebSocket de chat actives"
)

HTTP_REQUEST_LATENCY = Histogram(
    "cuisine_ensemble_http_request_latency_seconds",
    "Latence des requetes HTTP en secondes",
    ["method", "endpoint"]
)

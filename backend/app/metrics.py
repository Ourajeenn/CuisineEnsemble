from prometheus_client import Counter, Gauge, Histogram

# ── Prometheus metrics — CuisineEnsemble ──────────────────────
MEALS_CREATED = Counter(
    "meals_created_total",
    "Nombre total de repas crees"
)

PARTICIPATIONS_TOTAL = Counter(
    "participations_total",
    "Nombre total de reservations",
    ["status"]  # "booked", "cancelled"
)

# Legacy alias kept for backward compat
BOOKINGS_TOTAL = PARTICIPATIONS_TOTAL

ACTIVE_CHAT_CONNECTIONS = Gauge(
    "websocket_connections_active",
    "Nombre de connexions WebSocket de chat actives"
)

ACTIVE_USERS = Gauge(
    "active_users_total",
    "Nombre d'utilisateurs connectes (via auth token)"
)

HTTP_REQUEST_LATENCY = Histogram(
    "http_request_duration_seconds",
    "Latence des requetes HTTP en secondes",
    ["method", "endpoint"],
    buckets=[0.01, 0.05, 0.1, 0.25, 0.5, 1.0, 2.0, 5.0]
)

PAYMENTS_TOTAL = Counter(
    "payments_total",
    "Nombre total de paiements effectues",
    ["status"]  # "success", "failed"
)

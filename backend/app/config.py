import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "CuisineEnsemble"
    API_V1_STR: str = "/api/v1"
    
    # Auth configuration
    SECRET_KEY: str = os.getenv("SECRET_KEY", "super_secret_cuisine_ensemble_key_2026")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    ALGORITHM: str = "HS256"
    
    # Database configuration
    # Default to local SQLite fallback if DATABASE_URL is not specified in env
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", 
        "sqlite:///./cuisine_ensemble.db"
    )

    class Config:
        case_sensitive = True

settings = Settings()

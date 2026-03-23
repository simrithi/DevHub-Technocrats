from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres:password@localhost:5432/hyperadar"
    REDIS_URL: str = "redis://localhost:6379"
    KAFKA_BOOTSTRAP_SERVERS: str = "localhost:9092"
    class Config:
        env_file = ".env"

settings = Settings()

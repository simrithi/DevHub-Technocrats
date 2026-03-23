import redis.asyncio as redis
from config.settings import settings

_client = None

def get_client() -> redis.Redis:
    global _client
    if _client is None:
        _client = redis.from_url(settings.REDIS_URL)
    return _client

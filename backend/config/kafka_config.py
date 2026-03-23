from config.settings import settings

KAFKA_CONFIG = {
    "bootstrap.servers": settings.KAFKA_BOOTSTRAP_SERVERS,
}

TOPICS = {
    "reddit": "reddit-posts",
    "binance": "binance-tickers",
    "alerts": "alerts",
    "predictions": "predictions",
}

import httpx
from datetime import datetime

BINANCE_BASE = "https://api.binance.com/api/v3"

class BinanceCollector:
    async def get_ticker(self, symbol: str) -> dict:
        async with httpx.AsyncClient() as client:
            r = await client.get(f"{BINANCE_BASE}/ticker/24hr", params={"symbol": symbol})
            r.raise_for_status()
            return r.json()

    async def get_klines(self, symbol: str, interval: str = "1h", limit: int = 100) -> list:
        async with httpx.AsyncClient() as client:
            r = await client.get(f"{BINANCE_BASE}/klines", params={
                "symbol": symbol, "interval": interval, "limit": limit
            })
            r.raise_for_status()
            return r.json()

from fastapi import APIRouter, HTTPException

router = APIRouter()

COINS = [
    {"coin": "PEPE", "name": "Pepe Coin",  "hype_score": 78, "sentiment": 0.82, "phase": 3, "phase_label": "Retail FOMO"},
    {"coin": "WIF",  "name": "dogwifhat",  "hype_score": 65, "sentiment": 0.71, "phase": 2, "phase_label": "Viral Growth"},
    {"coin": "DOGE", "name": "Dogecoin",   "hype_score": 55, "sentiment": 0.60, "phase": 2, "phase_label": "Viral Growth"},
    {"coin": "SHIB", "name": "Shiba Inu",  "hype_score": 42, "sentiment": 0.48, "phase": 1, "phase_label": "Accumulation"},
    {"coin": "BONK", "name": "Bonk",       "hype_score": 30, "sentiment": 0.35, "phase": 0, "phase_label": "Markdown"},
]

@router.get("/")
def list_coins():
    return COINS

@router.get("/{coin_id}")
def get_coin(coin_id: str):
    coin = next((c for c in COINS if c["coin"].lower() == coin_id.lower()), None)
    if not coin:
        raise HTTPException(status_code=404, detail="Coin not found")
    return coin

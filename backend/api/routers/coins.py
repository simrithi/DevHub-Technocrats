from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_coins():
    return []

@router.get("/{coin_id}")
async def get_coin(coin_id: str):
    return {"id": coin_id}

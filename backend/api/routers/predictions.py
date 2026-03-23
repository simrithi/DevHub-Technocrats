from fastapi import APIRouter

router = APIRouter()

@router.get("/{coin_id}")
async def get_prediction(coin_id: str):
    return {"coin_id": coin_id, "prediction": None}

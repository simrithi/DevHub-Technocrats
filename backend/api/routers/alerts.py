from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_alerts():
    return []

@router.post("/")
async def create_alert(alert: dict):
    return alert

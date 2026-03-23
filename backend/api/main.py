from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routers import coins, alerts, predictions
from api.websocket import router as ws_router

app = FastAPI(title="HypeRadar API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(coins.router, prefix="/api/coins", tags=["coins"])
app.include_router(alerts.router, prefix="/api/alerts", tags=["alerts"])
app.include_router(predictions.router, prefix="/api/predictions", tags=["predictions"])
app.include_router(ws_router)

@app.get("/health")
def health():
    return {"status": "ok"}

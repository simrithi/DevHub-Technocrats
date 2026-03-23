from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()
_connections: list[WebSocket] = []

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    _connections.append(websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        _connections.remove(websocket)

async def broadcast(message: dict):
    for ws in _connections:
        await ws.send_json(message)

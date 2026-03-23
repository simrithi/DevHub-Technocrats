export function createWebSocket(onMessage) {
  const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000/ws");
  ws.onmessage = (e) => onMessage(JSON.parse(e.data));
  return ws;
}

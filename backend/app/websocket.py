from fastapi import WebSocket
from typing import Dict, List

class ConnectionManager:
    def __init__(self):
        # Key: meal_id (int), Value: List of active WebSocket connections
        self.active_connections: Dict[int, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, meal_id: int):
        await websocket.accept()
        if meal_id not in self.active_connections:
            self.active_connections[meal_id] = []
        self.active_connections[meal_id].append(websocket)

    def disconnect(self, websocket: WebSocket, meal_id: int):
        if meal_id in self.active_connections:
            if websocket in self.active_connections[meal_id]:
                self.active_connections[meal_id].remove(websocket)
            if not self.active_connections[meal_id]:
                del self.active_connections[meal_id]

    async def send_personal_message(self, message: dict, websocket: WebSocket):
        await websocket.send_json(message)

    async def broadcast(self, message: dict, meal_id: int):
        if meal_id in self.active_connections:
            for connection in self.active_connections[meal_id]:
                try:
                    await connection.send_json(message)
                except Exception:
                    # Ignore failed sends, they will be cleaned up on disconnect
                    pass

    def get_active_connections_count(self) -> int:
        return sum(len(conns) for conns in self.active_connections.values())

manager = ConnectionManager()

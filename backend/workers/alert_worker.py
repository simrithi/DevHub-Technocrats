from typing import Callable

_handlers: list[Callable] = []

def register(handler: Callable):
    _handlers.append(handler)

async def dispatch(event: dict):
    for handler in _handlers:
        await handler(event)

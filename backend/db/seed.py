from db.postgres import execute

async def seed():
    await execute("""
        INSERT INTO coins (id, name, symbol) VALUES
        ('bitcoin', 'Bitcoin', 'BTC'),
        ('ethereum', 'Ethereum', 'ETH'),
        ('dogecoin', 'Dogecoin', 'DOGE')
        ON CONFLICT DO NOTHING
    """)

if __name__ == "__main__":
    import asyncio
    asyncio.run(seed())

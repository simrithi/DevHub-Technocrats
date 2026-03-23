def score(coin_data: dict) -> float:
    risk = 0.0
    if not coin_data.get("liquidity_locked"):
        risk += 0.4
    if coin_data.get("top_holder_pct", 0) > 50:
        risk += 0.3
    if not coin_data.get("contract_verified"):
        risk += 0.2
    if not coin_data.get("team_doxxed"):
        risk += 0.1
    return min(risk, 1.0)

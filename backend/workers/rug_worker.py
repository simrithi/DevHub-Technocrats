def score(coin_data: dict) -> float:
    """Returns a rug pull risk score between 0 and 1."""
    score = 0.0
    if coin_data.get("liquidity_locked") is False:
        score += 0.4
    if coin_data.get("top_holder_pct", 0) > 50:
        score += 0.3
    if coin_data.get("contract_verified") is False:
        score += 0.2
    if coin_data.get("team_doxxed") is False:
        score += 0.1
    return min(score, 1.0)

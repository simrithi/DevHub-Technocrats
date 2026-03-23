def detect(features: dict) -> dict:
    score = 0.0
    if features.get("volume_spike", 1) > 3:
        score += 0.5
    if features.get("price_change_pct", 0) > 50:
        score += 0.3
    if features.get("momentum", 0) > 0:
        score += 0.2
    return {"pump_probability": min(score, 1.0)}

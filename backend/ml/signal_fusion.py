def fuse(signals: dict) -> dict:
    weights = {
        "sentiment": 0.3,
        "pump_probability": 0.3,
        "rug_risk": -0.2,
        "volume_spike": 0.2,
    }
    score = sum(signals.get(k, 0) * w for k, w in weights.items())
    return {"fused_score": round(max(0, min(score, 1)), 4)}

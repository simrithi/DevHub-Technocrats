PHASES = ["accumulation", "markup", "distribution", "markdown"]

def classify(features: dict) -> str:
    price_change = features.get("price_change_pct", 0)
    volume_spike = features.get("volume_spike", 1)
    if price_change > 20 and volume_spike > 2:
        return "markup"
    elif price_change < -20:
        return "markdown"
    elif volume_spike > 1.5:
        return "distribution"
    return "accumulation"

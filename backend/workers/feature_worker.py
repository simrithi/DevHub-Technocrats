import numpy as np

def compute_features(prices: list[float], volumes: list[float]) -> dict:
    prices = np.array(prices)
    volumes = np.array(volumes)
    return {
        "price_change_pct": float((prices[-1] - prices[0]) / prices[0] * 100) if prices[0] else 0,
        "volume_spike": float(volumes[-1] / np.mean(volumes[:-1])) if len(volumes) > 1 else 1.0,
        "volatility": float(np.std(prices)),
        "momentum": float(np.mean(np.diff(prices))),
    }

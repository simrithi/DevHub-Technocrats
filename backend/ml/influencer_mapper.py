def map_influencers(mentions: list[dict]) -> dict:
    mapping = {}
    for m in mentions:
        handle = m.get("handle", "unknown")
        mapping.setdefault(handle, {"count": 0, "coins": []})
        mapping[handle]["count"] += 1
        coin = m.get("coin")
        if coin and coin not in mapping[handle]["coins"]:
            mapping[handle]["coins"].append(coin)
    return mapping

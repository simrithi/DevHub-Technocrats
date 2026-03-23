def extract_dna(coin_data: dict) -> dict:
    return {
        "name_pattern": coin_data.get("name", "").lower(),
        "has_animal": any(a in coin_data.get("name", "").lower() for a in ["dog", "cat", "pepe", "frog", "ape"]),
        "has_elon": "elon" in coin_data.get("description", "").lower(),
        "meme_score": coin_data.get("meme_score", 0),
    }

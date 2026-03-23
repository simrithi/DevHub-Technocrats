from transformers import pipeline

_sentiment = pipeline("sentiment-analysis", model="cardiffnlp/twitter-roberta-base-sentiment-latest")

def analyze(texts: list[str]) -> list[dict]:
    return _sentiment(texts, truncation=True, max_length=512)

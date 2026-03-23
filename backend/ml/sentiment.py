from transformers import pipeline

_classifier = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-sentiment-latest")

def analyze(text: str) -> dict:
    result = _classifier(text, truncation=True, max_length=512)
    return result[0] if result else {}

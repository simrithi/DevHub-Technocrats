import praw
from config.settings import settings

COIN_SUBREDDITS = {
    "PEPE": ["pepecoin", "CryptoCurrency", "memecoin"],
    "WIF":  ["dogwifhat", "CryptoCurrency", "memecoin"],
    "DOGE": ["dogecoin", "CryptoCurrency"],
    "SHIB": ["SHIBArmy", "CryptoCurrency"],
    "BONK": ["bonkcoin", "CryptoCurrency", "memecoin"],
}

def _client():
    return praw.Reddit(
        client_id=settings.REDDIT_CLIENT_ID,
        client_secret=settings.REDDIT_CLIENT_SECRET,
        user_agent=settings.REDDIT_USER_AGENT,
    )

class RedditCollector:
    def __init__(self):
        self.reddit = _client()

    def collect_posts(self, coin: str, limit: int = 50) -> list[dict]:
        subreddits = COIN_SUBREDDITS.get(coin.upper(), ["CryptoCurrency"])
        posts = []

        for sub in subreddits:
            try:
                for post in self.reddit.subreddit(sub).hot(limit=limit):
                    ticker = coin.upper()
                    text = f"{post.title} {post.selftext}".lower()
                    if ticker.lower() not in text and sub not in ["pepecoin", "dogwifhat", "dogecoin", "SHIBArmy", "bonkcoin"]:
                        continue
                    posts.append({
                        "id":           post.id,
                        "coin":         ticker,
                        "subreddit":    sub,
                        "title":        post.title,
                        "score":        post.score,
                        "num_comments": post.num_comments,
                        "upvote_ratio": post.upvote_ratio,
                        "created_utc":  post.created_utc,
                        "selftext":     post.selftext[:500] if post.selftext else "",
                        "url":          post.url,
                    })
            except Exception as e:
                print(f"[reddit] error on r/{sub}: {e}")

        return posts

    def search_coin(self, coin: str, limit: int = 25) -> list[dict]:
        """Search all of Reddit for a coin ticker — equivalent to RedditSearchScraper."""
        posts = []
        try:
            for post in self.reddit.subreddit("all").search(coin.upper(), sort="new", limit=limit):
                posts.append({
                    "id":           post.id,
                    "coin":         coin.upper(),
                    "subreddit":    post.subreddit.display_name,
                    "title":        post.title,
                    "score":        post.score,
                    "num_comments": post.num_comments,
                    "upvote_ratio": post.upvote_ratio,
                    "created_utc":  post.created_utc,
                    "selftext":     post.selftext[:500] if post.selftext else "",
                    "url":          post.url,
                })
        except Exception as e:
            print(f"[reddit] search error for {coin}: {e}")
        return posts

    def collect_all(self, limit: int = 30) -> list[dict]:
        all_posts = []
        for coin in COIN_SUBREDDITS:
            all_posts.extend(self.collect_posts(coin, limit))
        return all_posts

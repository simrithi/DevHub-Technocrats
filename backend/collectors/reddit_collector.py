import snscrape.modules.reddit as snreddit

class RedditCollector:
    def collect_posts(self, subreddit: str, limit: int = 100) -> list[dict]:
        posts = []
        for post in snreddit.RedditSubredditScraper(subreddit).get_items():
            if len(posts) >= limit:
                break
            posts.append({
                "id": post.id,
                "title": post.title,
                "score": post.score,
                "num_comments": post.numComments,
                "created_utc": post.date.isoformat(),
                "selftext": post.selftext or "",
                "url": post.url,
            })
        return posts

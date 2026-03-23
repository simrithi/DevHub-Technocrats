from pytrends.request import TrendReq

class TrendsCollector:
    def __init__(self):
        self.pytrends = TrendReq(hl="en-US", tz=360)

    def get_interest(self, keywords: list[str], timeframe: str = "now 7-d") -> dict:
        self.pytrends.build_payload(keywords, timeframe=timeframe)
        df = self.pytrends.interest_over_time()
        if df.empty:
            return {}
        return df.drop(columns=["isPartial"], errors="ignore").to_dict()

CREATE TABLE coin_snapshots (
    id SERIAL PRIMARY KEY,
    coin VARCHAR(20) NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    mention_count INT,
    avg_sentiment FLOAT,
    mention_velocity FLOAT,
    hype_score FLOAT,
    phase_num INT,
    phase_label VARCHAR(30),
    pump_probability FLOAT,
    rug_risk_level VARCHAR(10),
    rug_risk_score INT,
    google_trend INT,
    price FLOAT,
    price_change_24h FLOAT,
    volume FLOAT
);

CREATE TABLE raw_posts (
    id SERIAL PRIMARY KEY,
    coin VARCHAR(20),
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    title TEXT,
    score INT,
    comments INT,
    author VARCHAR(100),
    sentiment FLOAT,
    subreddit VARCHAR(50)
);

CREATE TABLE alerts_log (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    coin VARCHAR(20),
    alert_type VARCHAR(50),
    severity VARCHAR(10),
    message TEXT
);

CREATE INDEX idx_snapshots_coin_time ON coin_snapshots(coin, timestamp DESC);
CREATE INDEX idx_posts_coin_time ON raw_posts(coin, timestamp DESC);
CREATE INDEX idx_alerts_time ON alerts_log(timestamp DESC);
# HypeRadar
> Meme coin behavioral intelligence — detecting social signals 4–6 hours upstream of price movement.

## What It Does
HypeRadar classifies which phase of its hype lifecycle a meme coin is currently
in, and detects coordinated social manipulation before it affects price.

**Two core innovations:**
1. Automated hype cycle phase classifier — live signal-fed, nobody has operationalised this before
2. Social-signal rug pull detector — detects coordinated posting patterns, not just blockchain code

## Tech Stack
| Layer | Technology |
|---|---|
| Data Sources | snscrape (Reddit), pytrends, Binance WebSocket |
| Message Queue | Apache Kafka |
| Backend | Python, FastAPI |
| ML / NLP | VADER, XGBoost, Random Forest, Isolation Forest, Embeddings |
| Storage | PostgreSQL, Redis |
| Frontend | Next.js 14, Tailwind, Recharts |
| Infra | Docker, Kubernetes |

## Quick Start

### 1. Clone
```bash
git clone https://github.com/YOUR_USERNAME/hyperadar.git
cd hyperadar
```

### 2. Environment variables
```bash
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
# fill in your actual values
```

### 3. Start all services
```bash
cd infra/docker
docker-compose up -d
```

### 4. Run frontend
```bash
cd frontend
npm install
npm run dev
# open http://localhost:3000
```

### 5. Run backend
```bash
cd backend
pip install -r requirements.txt
uvicorn api.main:app --reload
```

### 6. Start workers (each in a separate terminal)
```bash
python collectors/scheduler.py
python workers/sentiment_worker.py
python workers/feature_worker.py
python workers/alert_worker.py
```

## Team
Built at vibeX 2026 — CHiPSET — Track 1: Crypto & Trend Intelligence
```

---

**`.gitignore`**
```
# Python
__pycache__/
*.py[cod]
*.pyo
.env
venv/
.venv/
*.egg-info/
dist/
build/
.pytest_cache/

# ML models — too large for git
backend/ml/models/*.pkl
backend/ml/models/*.joblib
backend/ml/models/*.json

# Node
node_modules/
.next/
out/
.DS_Store
npm-debug.log*

# Environment — NEVER commit these
.env
.env.local
backend/.env
frontend/.env.local

# Database
*.sqlite3
*.db

# IDE
.vscode/
.idea/
*.swp

# Docker
*.log
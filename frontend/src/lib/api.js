const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function getCoins() {
  const res = await fetch(`${BASE_URL}/api/coins`);
  return res.json();
}

export async function getCoin(id) {
  const res = await fetch(`${BASE_URL}/api/coins/${id}`);
  return res.json();
}

export async function getAlerts() {
  const res = await fetch(`${BASE_URL}/api/alerts`);
  return res.json();
}

export async function getPrediction(id) {
  const res = await fetch(`${BASE_URL}/api/predictions/${id}`);
  return res.json();
}

export const mockCoins = [
  { id: "doge", name: "Dogecoin", symbol: "DOGE", score: 0.82, phase: "Markup", sentiment: 0.75, pumpProbability: 0.6, rugRisk: 0.1 },
  { id: "pepe", name: "Pepe", symbol: "PEPE", score: 0.78, phase: "Accumulation", sentiment: 0.68, pumpProbability: 0.5, rugRisk: 0.3 },
  { id: "shib", name: "Shiba Inu", symbol: "SHIB", score: 0.71, phase: "Distribution", sentiment: 0.55, pumpProbability: 0.4, rugRisk: 0.2 },
  { id: "floki", name: "Floki", symbol: "FLOKI", score: 0.65, phase: "Markup", sentiment: 0.7, pumpProbability: 0.55, rugRisk: 0.25 },
  { id: "bonk", name: "Bonk", symbol: "BONK", score: 0.6, phase: "Markdown", sentiment: 0.4, pumpProbability: 0.2, rugRisk: 0.4 },
];

export const mockAlerts = [
  { id: "1", coinId: "doge", type: "pump", message: "DOGE volume spike detected (+300%)", triggeredAt: "2024-01-01T10:00:00Z" },
  { id: "2", coinId: "pepe", type: "sentiment", message: "PEPE sentiment surge on Reddit", triggeredAt: "2024-01-01T09:30:00Z" },
  { id: "3", coinId: "shib", type: "rug", message: "SHIB rug risk elevated (0.6)", triggeredAt: "2024-01-01T09:00:00Z" },
];

export default function PredictionBox({ coin = "DOGE", score = 0.78 }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4">
      <h2 className="text-zinc-400 text-sm mb-2">Prediction</h2>
      <p className="text-white font-bold text-lg">{coin}</p>
      <p className="text-purple-400 text-sm">Fused Score: {score}</p>
    </div>
  );
}

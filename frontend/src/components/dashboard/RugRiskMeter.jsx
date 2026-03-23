export default function RugRiskMeter({ risk = 0.2 }) {
  const color = risk > 0.6 ? "text-red-400" : risk > 0.3 ? "text-yellow-400" : "text-green-400";
  return (
    <div className="bg-zinc-900 rounded-xl p-4">
      <h2 className="text-zinc-400 text-sm mb-2">Rug Risk</h2>
      <span className={`text-3xl font-bold ${color}`}>{(risk * 100).toFixed(0)}%</span>
    </div>
  );
}

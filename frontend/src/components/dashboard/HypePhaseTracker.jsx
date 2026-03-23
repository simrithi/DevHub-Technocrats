const PHASES = ["Accumulation", "Markup", "Distribution", "Markdown"];

export default function HypePhaseTracker({ phase = "Markup" }) {
  return (
    <div className="col-span-2 bg-zinc-900 rounded-xl p-4">
      <h2 className="text-zinc-400 text-sm mb-3">Hype Phase Tracker</h2>
      <div className="flex gap-2">
        {PHASES.map((p) => (
          <span key={p} className={`px-3 py-1 rounded-full text-sm font-medium ${p === phase ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-400"}`}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AIAnalyst({ summary = "Market showing bullish momentum. Watch for pump signals on meme coins." }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 col-span-2">
      <h2 className="text-zinc-400 text-sm mb-2">AI Analyst</h2>
      <p className="text-zinc-200 text-sm leading-relaxed">{summary}</p>
    </div>
  );
}

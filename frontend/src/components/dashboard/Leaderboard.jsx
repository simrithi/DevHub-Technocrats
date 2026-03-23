import { mockCoins } from "@/data/mock";

export default function Leaderboard() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 col-span-1">
      <h2 className="text-zinc-400 text-sm mb-3">Leaderboard</h2>
      <ol className="flex flex-col gap-2">
        {mockCoins.slice(0, 5).map((c, i) => (
          <li key={c.id} className="flex justify-between text-sm text-zinc-300">
            <span>{i + 1}. {c.name}</span>
            <span className="text-purple-400">{c.score}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

import { mockAlerts } from "@/data/mock";

export default function AlertFeed() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 col-span-1">
      <h2 className="text-zinc-400 text-sm mb-3">Alert Feed</h2>
      <ul className="flex flex-col gap-2">
        {mockAlerts.map((a) => (
          <li key={a.id} className="text-sm text-zinc-300 border-b border-zinc-800 pb-1">{a.message}</li>
        ))}
      </ul>
    </div>
  );
}

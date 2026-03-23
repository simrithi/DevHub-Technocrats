export default function MetricCard({ title, value }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex flex-col gap-1">
      <span className="text-zinc-400 text-sm">{title}</span>
      <span className="text-2xl font-bold text-white">{value}</span>
    </div>
  );
}

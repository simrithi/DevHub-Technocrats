import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/alerts", label: "Alerts" },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-zinc-900 flex flex-col p-4 gap-2">
      <span className="text-xl font-bold text-purple-400 mb-6">HypeRadar</span>
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="text-zinc-300 hover:text-white px-3 py-2 rounded hover:bg-zinc-800">
          {l.label}
        </Link>
      ))}
    </aside>
  );
}

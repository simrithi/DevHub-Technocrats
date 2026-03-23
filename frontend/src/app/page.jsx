import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold text-purple-400 mb-4">HypeRadar</h1>
      <p className="text-zinc-400 mb-8">Meme coin behavioral intelligence</p>
      <Link href="/dashboard" className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 font-medium">
        Open Dashboard
      </Link>
    </div>
  );
}

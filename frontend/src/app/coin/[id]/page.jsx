export default function CoinPage({ params }) {
  return (
    <div className="p-6 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Coin: {params.id}</h1>
    </div>
  );
}

const alerts = [
  { type: 'secondary', pulse: true,  text: '$WIF PUMP DETECTED - velocity 2.7x' },
  { type: 'tertiary',  pulse: false, text: '$WOJAK HIGH DUMP RISK' },
  { type: 'tertiary',  pulse: true,  text: '$MEME CRITICAL RUG RISK - EXIT NOW' },
  { type: 'secondary', pulse: false, text: '$PEPE WHALE ACCUMULATION +14%' },
]

export default function Ticker() {
  return (
    <section className="ticker-wrap h-8 flex items-center border-y border-outline-variant/10">
      <div className="ticker gap-8 px-4">
        {alerts.map((a, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full bg-${a.type} ${a.pulse ? 'animate-pulse' : ''}`}
            />
            <span className={`font-label text-[10px] uppercase tracking-wider text-${a.type}`}>
              {a.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
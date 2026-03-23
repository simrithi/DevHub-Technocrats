import { ScanLine } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 w-full sticky top-0 z-50 bg-[#0B0E14] shadow-[0_0_20px_rgba(0,163,255,0.08)]">
      <div className="flex items-center gap-2">
        <ScanLine className="w-6 h-6 text-primary-fixed" />
        <h1 className="font-headline tracking-widest text-xl font-bold text-primary-fixed uppercase">
          HypeRadar
        </h1>
      </div>
      <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/30">
        <img alt="User profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/32" />
      </div>
    </header>
  )
}

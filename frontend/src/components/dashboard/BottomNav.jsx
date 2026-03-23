'use client'

import { useState } from 'react'
import { Home, Search, Bell, Wallet } from 'lucide-react'

const navItems = [
  { Icon: Home,   label: 'Home'      },
  { Icon: Search, label: 'Search'    },
  { Icon: Bell,   label: 'Alerts'    },
  { Icon: Wallet, label: 'Portfolio' },
]

export default function BottomNav() {
  const [active, setActive] = useState(0)

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[150] flex justify-around items-center pb-6 pt-2 px-4 bg-[#0B0E14]/80 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
      {navItems.map(({ Icon, label }, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-200 ${
            active === i
              ? 'text-primary font-bold bg-primary/10 rounded-lg px-3 py-1'
              : 'text-slate-500 hover:text-primary px-3 py-1'
          }`}
        >
          <Icon className="w-5 h-5" strokeWidth={active === i ? 2.5 : 1.5} />
          <span className="font-label text-[10px] uppercase tracking-tighter mt-1">{label}</span>
        </button>
      ))}
    </nav>
  )
}

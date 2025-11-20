import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
              Let’s Talk
            </a>
          </nav>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden text-white/90">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm animate-in" onClick={() => setOpen(false)}>
          <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-slate-900/95 p-6 w-[85vw] max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white/80">
                <X size={22} />
              </button>
            </div>
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-blue-100/90 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

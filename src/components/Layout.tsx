import { NavLink, Outlet } from 'react-router-dom'
import { Rocket, Sun, Star, Globe2, Moon, RotateCw, Sprout, Gamepad2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  {
    to: '/',
    label: 'Universo',
    icon: Rocket,
    color: 'text-purple-400',
    border: 'border-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    to: '/sistema-solar',
    label: 'Sistema Solar',
    icon: Sun,
    color: 'text-yellow-400',
    border: 'border-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    to: '/estrelas',
    label: 'Estrelas',
    icon: Star,
    color: 'text-yellow-200',
    border: 'border-yellow-200',
    bg: 'bg-yellow-200/10',
  },
  {
    to: '/planetas',
    label: 'Planetas',
    icon: Globe2,
    color: 'text-blue-400',
    border: 'border-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    to: '/lua',
    label: 'A Lua',
    icon: Moon,
    color: 'text-slate-300',
    border: 'border-slate-300',
    bg: 'bg-slate-300/10',
  },
  {
    to: '/movimentos',
    label: 'Movimentos',
    icon: RotateCw,
    color: 'text-cyan-400',
    border: 'border-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    to: '/solo',
    label: 'O Solo',
    icon: Sprout,
    color: 'text-emerald-400',
    border: 'border-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    to: '/quiz',
    label: 'Quiz',
    icon: Gamepad2,
    color: 'text-rose-400',
    border: 'border-rose-400',
    bg: 'bg-rose-400/10',
  },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none z-0" />

      {/* Header */}
      <header className="relative z-10 text-center pt-8 pb-4 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 glow-text mb-2">
          Ciências - Revisão para a Prova
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base">
          3º Ano — Escola Alvacir Vite Rossi
        </p>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 w-full overflow-x-auto hide-scrollbar py-2 border-b border-white/5 bg-background/50 backdrop-blur-sm sticky top-0">
        <ul className="flex justify-start md:justify-center gap-2 px-4 w-max mx-auto">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 whitespace-nowrap font-bold text-sm',
                    isActive
                      ? cn(
                          item.border,
                          item.bg,
                          'shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white scale-105',
                        )
                      : 'border-transparent bg-card/50 hover:bg-card hover:border-white/10 text-muted-foreground hover:text-foreground',
                  )
                }
              >
                <item.icon className={cn('w-4 h-4 md:w-5 md:h-5', item.color)} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 container mx-auto p-4 md:p-6 pb-24 max-w-5xl">
        <div className="animate-fade-in w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sun, Star, Info, ListChecks } from 'lucide-react'

const planets = [
  {
    id: 1,
    name: 'Mercúrio',
    desc: 'Mais perto do Sol',
    color: 'bg-stone-400',
    border: 'border-stone-500',
  },
  {
    id: 2,
    name: 'Vênus',
    desc: 'O mais quente!',
    color: 'bg-orange-300',
    border: 'border-orange-400',
  },
  { id: 3, name: 'Terra', desc: 'Nosso lar!', color: 'bg-blue-500', border: 'border-blue-400' },
  { id: 4, name: 'Marte', desc: 'Planeta vermelho', color: 'bg-red-500', border: 'border-red-600' },
  {
    id: 5,
    name: 'Júpiter',
    desc: 'O maior de todos!',
    color: 'bg-amber-600',
    border: 'border-amber-700',
  },
  {
    id: 6,
    name: 'Saturno',
    desc: 'Famoso pelos anéis',
    color: 'bg-yellow-200',
    border: 'border-yellow-400',
    hasRings: true,
  },
  { id: 7, name: 'Urano', desc: 'Gira "deitado"', color: 'bg-cyan-300', border: 'border-cyan-400' },
  {
    id: 8,
    name: 'Netuno',
    desc: 'O mais distante',
    color: 'bg-blue-700',
    border: 'border-blue-600',
  },
]

export default function SistemaSolar() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-yellow-500/20 rounded-2xl glow-yellow">
          <Sun className="w-8 h-8 text-yellow-400 animate-[spin_10s_linear_infinite]" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">O Sistema Solar</h2>
      </div>

      <Card className="border-yellow-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-yellow-400">
            <Star className="w-6 h-6 fill-yellow-400" />O que é o Sistema Solar?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg leading-relaxed">
          <p>
            O Sistema Solar é um{' '}
            <strong>conjunto de corpos celestes que gravitam na órbita de um sol</strong> (uma
            estrela). É como uma grande família que gira ao redor do Sol!
          </p>
          <div className="p-5 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl border-l-4 border-yellow-500">
            O Sol é uma <strong>estrela!</strong> Ele possui <strong>99,8%</strong> de toda a massa
            do Sistema Solar. Por isso, ele atrai tudo ao seu redor pela força da gravidade.
          </div>
          <p>
            No nosso Sistema Solar existem <strong>8 planetas</strong>, dezenas de satélites
            naturais, milhares de asteroides, meteoros, meteoroides e cometas.
          </p>
        </CardContent>
      </Card>

      <Card className="border-cyan-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-cyan-300">
            <OrbitIcon className="w-6 h-6" />
            Ordem dos planetas (mais perto → mais longe do Sol)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {planets.map((planet) => (
              <div
                key={planet.id}
                className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700 hover:scale-105 transition-transform cursor-default group"
              >
                <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                  <div
                    className={`absolute -top-2 bg-slate-800 text-xs font-bold px-2 py-0.5 rounded-full border border-slate-600 z-10 text-slate-300`}
                  >
                    {planet.id}
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full ${planet.color} border-2 ${planet.border} shadow-lg relative group-hover:animate-float`}
                  >
                    {planet.hasRings && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 border-4 border-stone-300/60 rounded-[50%] -rotate-12" />
                    )}
                  </div>
                </div>
                <h4 className="font-bold text-white text-lg">{planet.name}</h4>
                <p className="text-sm text-slate-400 text-center">{planet.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/30 flex items-start gap-3 text-indigo-200">
            <Info className="w-6 h-6 shrink-0 mt-0.5" />
            <p>
              <strong>Dica para decorar a ordem:</strong> "<strong>M</strong>inha <strong>V</strong>
              ó <strong>T</strong>em <strong>M</strong>uitas <strong>J</strong>oias,{' '}
              <strong>S</strong>apatos, <strong>U</strong>m <strong>N</strong>avio" — Mercúrio,
              Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-600 bg-slate-900/60 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-xl text-slate-200">E o Plutão?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-slate-300 text-lg">
          <p>
            Durante muitos anos, Plutão foi considerado o <strong>9º planeta</strong> do Sistema
            Solar. Mas em <strong>agosto de 2006</strong>, a{' '}
            <strong>União Astronômica Internacional</strong> decidiu que ele é um{' '}
            <strong>planeta anão</strong>.
          </p>
          <div className="p-3 bg-slate-800 rounded-lg text-sm">
            Outros planetas anões: <strong>Ceres e Éris</strong>.
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-500/30 bg-emerald-950/20 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-emerald-400">
            <ListChecks className="w-6 h-6" />
            Resumão do Sistema Solar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-emerald-100/90 text-lg grid md:grid-cols-2 gap-x-4">
            <li>
              <span className="text-emerald-400 mr-2">•</span>O Sistema Solar = corpos celestes que
              orbitam o Sol
            </li>
            <li>
              <span className="text-emerald-400 mr-2">•</span>O Sol é uma <strong>estrela</strong>
            </li>
            <li>
              <span className="text-emerald-400 mr-2">•</span>São <strong>8 planetas</strong>
            </li>
            <li>
              <span className="text-emerald-400 mr-2">•</span>
              <strong>Plutão</strong> é um planeta anão (desde 2006)
            </li>
            <li>
              <span className="text-emerald-400 mr-2">•</span>Mais próximo do Sol:{' '}
              <strong>Mercúrio</strong>
            </li>
            <li>
              <span className="text-emerald-400 mr-2">•</span>Mais quente: <strong>Vênus</strong>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function OrbitIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.13 5.09A10 10 0 0 1 21.9 12c0 5.52-4.48 10-10 10s-10-4.48-10-10A10 10 0 0 1 4.87 5.09" />
    </svg>
  )
}

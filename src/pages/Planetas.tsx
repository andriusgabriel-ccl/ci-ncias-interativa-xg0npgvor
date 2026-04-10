import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe2, MountainSnow, Wind, Trophy } from 'lucide-react'

export default function Planetas() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-500/20 rounded-2xl glow-box">
          <Globe2 className="w-8 h-8 text-blue-400 animate-float" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">Os Planetas</h2>
      </div>

      <Card className="border-blue-400/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-blue-300">
            <Globe2 className="w-6 h-6" />O que é um planeta?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            Segundo a <strong>União Astronômica Internacional</strong>, um planeta é um corpo
            celeste que:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Está em <strong>órbita ao redor de uma estrela</strong>
            </li>
            <li>
              Tem a <strong>sua própria gravidade</strong>
            </li>
            <li>
              Tem a <strong>órbita livre</strong> (não é bloqueado por outro planeta)
            </li>
          </ul>
          <div className="p-4 bg-blue-900/20 rounded-xl font-bold text-center border border-blue-500/30">
            Planetas são corpos celestes que giram em torno de uma estrela.
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-400/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-4 text-2xl text-white">
            <span className="flex items-center gap-2 text-stone-400">
              <MountainSnow className="w-6 h-6" /> Rochosos
            </span>
            <span className="text-slate-500">vs.</span>
            <span className="flex items-center gap-2 text-cyan-300">
              <Wind className="w-6 h-6" /> Gasosos
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-700 space-y-3">
              <h4 className="font-bold text-stone-300 border-b border-stone-700 pb-2 flex items-center gap-2">
                <MountainSnow className="w-5 h-5" /> Planetas Rochosos
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Feitos de rocha e metal</li>
                <li>• Menores</li>
                <li>• Mais perto do Sol</li>
                <li className="font-bold text-stone-200 pt-2 border-t border-stone-700/50 mt-2">
                  Mercúrio, Vênus, Terra, Marte
                </li>
              </ul>
            </div>

            <div className="p-5 bg-cyan-900/20 rounded-xl border border-cyan-800/50 space-y-3">
              <h4 className="font-bold text-cyan-300 border-b border-cyan-800/50 pb-2 flex items-center gap-2">
                <Wind className="w-5 h-5" /> Planetas Gasosos
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Feitos principalmente de gases</li>
                <li>• Muito maiores</li>
                <li>• Mais longe do Sol</li>
                <li className="font-bold text-cyan-200 pt-2 border-t border-cyan-800/30 mt-2">
                  Júpiter, Saturno, Urano, Netuno
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-800/50 rounded-xl text-slate-200 text-center leading-relaxed">
            Os 4 planetas <strong>rochosos</strong> (ou internos) são:{' '}
            <strong>Mercúrio, Vênus, Terra e Marte</strong>.<br />
            Os 4 planetas mais <strong>distantes</strong> do Sol são:{' '}
            <strong>Júpiter, Saturno, Urano e Netuno</strong>.
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-amber-400">
            <Trophy className="w-6 h-6 text-amber-400" />
            Fatos importantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-slate-200 text-lg">
            <li>
              <span className="text-stone-400 font-bold">Mercúrio</span> → mais perto do Sol
            </li>
            <li>
              <span className="text-orange-300 font-bold">Vênus</span> → o mais quente
            </li>
            <li>
              <span className="text-blue-400 font-bold">Terra</span> → nosso planeta, o único com
              vida conhecida
            </li>
            <li>
              <span className="text-red-400 font-bold">Marte</span> → chamado de "planeta vermelho"
            </li>
            <li>
              <span className="text-amber-600 font-bold">Júpiter</span> → o maior planeta do Sistema
              Solar
            </li>
            <li>
              <span className="text-yellow-200 font-bold">Saturno</span> → o segundo maior, famoso
              por seus <strong>anéis</strong>
            </li>
            <li>
              <span className="text-cyan-300 font-bold">Urano</span> e{' '}
              <span className="text-blue-600 font-bold">Netuno</span> → descobertos depois da
              invenção do telescópio
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

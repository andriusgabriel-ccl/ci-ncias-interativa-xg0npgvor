import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Moon, Satellite, Circle, Disc, Eclipse } from 'lucide-react'

export default function Lua() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-slate-300/20 rounded-2xl glow-box shadow-[0_0_15px_rgba(203,213,225,0.2)]">
          <Moon className="w-8 h-8 text-slate-300 animate-float" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">A Lua</h2>
      </div>

      <Card className="border-slate-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-slate-300">
            <Satellite className="w-6 h-6" />O que são satélites?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg leading-relaxed">
          <p>
            A Lua é o <strong>satélite natural</strong> da Terra. Mas o que é um satélite?
          </p>
          <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-600 text-center font-bold">
            Satélites são corpos celestes que gravitam em torno de um astro maior no espaço.
          </div>
          <p>Existem dois tipos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Satélites naturais</strong> → corpos celestes que giram em torno de planetas
              pela força da gravidade (como a Lua!)
            </li>
            <li>
              <strong>Satélites artificiais</strong> → equipamentos construídos pelo homem que ficam
              em órbita ao redor da Terra (como os de TV e GPS!)
            </li>
          </ul>
          <div className="p-4 bg-red-900/20 rounded-xl border-l-4 border-red-500 text-red-200 mt-4">
            Apenas dois planetas do Sistema Solar <strong>NÃO</strong> possuem satélites naturais:{' '}
            <strong>Mercúrio e Vênus</strong>.
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-400/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-slate-200">
            <Eclipse className="w-6 h-6" />
            As 4 fases da Lua
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-200 text-lg">
            Conforme a Lua se desloca em torno da Terra durante o mês, ela apresenta 4 aspectos
            diferentes:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-3 hover:scale-[1.02] transition-transform">
              <Circle className="w-16 h-16 text-slate-800 fill-slate-800" strokeWidth={1} />
              <div>
                <h4 className="font-bold text-white text-lg">Lua Nova</h4>
                <p className="text-sm text-slate-400">
                  A face voltada para a Terra <strong>não está iluminada</strong>. Não conseguimos
                  ver a Lua!
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-3 hover:scale-[1.02] transition-transform">
              <div className="relative w-16 h-16">
                <Moon className="w-16 h-16 text-yellow-100 fill-yellow-100" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Lua Crescente</h4>
                <p className="text-sm text-slate-400">
                  A parte iluminada está <strong>crescendo</strong>. Forma uma letra{' '}
                  <strong>D</strong>.
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-3 hover:scale-[1.02] transition-transform">
              <Circle
                className="w-16 h-16 text-yellow-100 fill-yellow-100 glow-yellow"
                strokeWidth={0}
              />
              <div>
                <h4 className="font-bold text-white text-lg">Lua Cheia</h4>
                <p className="text-sm text-slate-400">
                  O Sol ilumina <strong>toda</strong> a parte da Lua voltada para a Terra. A mais
                  brilhante!
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-3 hover:scale-[1.02] transition-transform">
              <div className="relative w-16 h-16 transform -scale-x-100">
                <Moon className="w-16 h-16 text-yellow-100 fill-yellow-100" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Lua Minguante</h4>
                <p className="text-sm text-slate-400">
                  A luminosidade está <strong>diminuindo</strong>. Forma uma letra{' '}
                  <strong>C</strong> ao contrário.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-xl text-center text-slate-300">
            As 4 fases: <strong>Nova → Crescente → Cheia → Minguante</strong>. Depois recomeça!
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

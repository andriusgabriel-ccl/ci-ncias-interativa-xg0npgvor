import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Sparkles, Cloud, Activity } from 'lucide-react'

export default function Estrelas() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-yellow-200/20 rounded-2xl glow-box">
          <Star className="w-8 h-8 text-yellow-200 fill-yellow-200 animate-float" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">As Estrelas</h2>
      </div>

      <Card className="border-yellow-400/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-yellow-400">
            <Star className="w-6 h-6 fill-yellow-400" />O Sol: a nossa estrela
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            O Sol é a <strong>estrela do nosso Sistema Solar</strong>. Todos os corpos celestes,
            inclusive a Terra, giram em torno dele.
          </p>
          <div className="p-5 bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500">
            O Sol é muito importante! Ele fornece <strong>luz, calor e energia</strong> para a vida
            na Terra. A energia do Sol chega à Terra por meio dos <strong>raios solares</strong>.
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-400/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-purple-300">
            <Sparkles className="w-6 h-6" />
            Constelações
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-200 text-lg">
          <p>
            Desde a antiguidade, o ser humano observa o céu. As <strong>constelações</strong> são
            grupos de estrelas próximas umas das outras (como vemos da Terra). Quando ligamos essas
            estrelas por <strong>linhas imaginárias</strong>, elas formam figuras e recebem nomes
            especiais!
          </p>
        </CardContent>
      </Card>

      <Card className="border-cyan-400/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-cyan-300">
            <Cloud className="w-6 h-6 fill-cyan-900/50 text-cyan-400" />O que são Nebulosas?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            <strong>Nebulosas</strong> são grandes nuvens encontradas no espaço, formadas
            principalmente de <strong>poeira cósmica</strong> e gases como{' '}
            <strong>hélio e hidrogênio</strong>.
          </p>
          <p>
            Algumas nebulosas surgem da <strong>explosão de estrelas</strong> que estão no final de
            suas vidas. Essa explosão se chama <strong>supernova</strong>!
          </p>
        </CardContent>
      </Card>

      <Card className="border-orange-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-orange-400">
            <Activity className="w-6 h-6" />
            Nascimento, vida e morte de uma estrela
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-slate-200 text-lg">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-orange-300 mb-2">
              <span className="text-xl">🐣</span> Nascimento
            </h4>
            <p>
              As estrelas nascem dentro das <strong>nebulosas</strong>. A força da gravidade faz os
              gases se juntarem e ficarem tão quentes que começam a brilhar! Esse processo se chama{' '}
              <strong>fusão nuclear</strong>.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-yellow-400 mb-2">
              <span className="text-xl">⏰</span> Vida
            </h4>
            <p>
              O tempo de vida de uma estrela depende da sua <strong>massa</strong> (quanto de
              matéria ela tem). Quanto maior a massa, mais calor e luz ela libera.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-slate-400 mb-2">
              <span className="text-xl">💀</span> Morte
            </h4>
            <p>
              Quando a estrela queima todo o seu combustível, ela esfria e diminui de tamanho. Os
              gases que sobram são lançados no espaço e formam uma <strong>nova nebulosa</strong>,
              de onde podem surgir novas estrelas! É um ciclo!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

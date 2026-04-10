import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Rocket, Sparkles, BookOpen, Orbit } from 'lucide-react'

export default function Universo() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-purple-500/20 rounded-2xl glow-box">
          <Rocket className="w-8 h-8 text-purple-400 animate-float" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">O Universo</h2>
      </div>

      <Card className="border-purple-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-purple-300">
            <Sparkles className="w-6 h-6" />O que é o Big Bang?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg leading-relaxed">
          <p>
            Imagine que <strong>tudo</strong> o que existe — todas as estrelas, planetas, a Terra,
            você! — estava espremido num pontinho minúsculo. Aí, há muito, muito tempo atrás,
            aconteceu uma <strong>explosão gigantesca</strong> chamada <strong>Big Bang</strong>{' '}
            (Grande Explosão).
          </p>
          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
            A teoria do Big Bang explica o <strong>surgimento do Universo</strong>. Ela foi
            anunciada em <strong>1948</strong>.
          </div>
          <p>
            Depois dessa explosão, a matéria foi esfriando e se juntando, formando os átomos, as
            estrelas, os planetas e tudo o que vemos hoje!
          </p>
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-yellow-200 font-medium">
            Segundo os cientistas, o universo surgiu entre{' '}
            <strong>10 e 20 bilhões de anos atrás</strong>. É tanto tempo que a gente nem consegue
            imaginar!
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-blue-300">
            <Orbit className="w-6 h-6" />O que são galáxias?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg leading-relaxed">
          <p>
            As <strong>galáxias</strong> são agrupamentos enormes de estrelas, planetas, asteroides,
            cometas, satélites e poeira cósmica. Tudo isso fica junto por causa da{' '}
            <strong>força da gravidade</strong>.
          </p>
          <p>
            O universo possui <strong>bilhões de galáxias!</strong> E uma delas é muito especial
            para nós...
          </p>
          <div className="p-5 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl border border-blue-400/30 glow-box text-center">
            <span className="text-xl font-bold text-white">
              A nossa galáxia se chama <span className="text-cyan-400 glow-text">Via Láctea</span>.
              É nela que ficam o Sol, a Terra e todo o nosso Sistema Solar.
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-500/30 bg-emerald-950/20 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-emerald-400">
            <BookOpen className="w-6 h-6" />
            Resumão do Universo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-emerald-100/90 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Big Bang</strong> = teoria que explica a origem do Universo
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Foi anunciada em <strong>1948</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                O universo surgiu entre <strong>10 e 20 bilhões de anos</strong> atrás
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Galáxias</strong> = agrupamentos de corpos celestes unidos pela gravidade
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Nossa galáxia = <strong>Via Láctea</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                O universo está sempre se <strong>expandindo</strong> (as galáxias estão se
                afastando)
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

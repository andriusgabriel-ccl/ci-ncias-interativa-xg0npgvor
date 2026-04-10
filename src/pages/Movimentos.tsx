import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  RotateCw,
  Sun,
  AlertTriangle,
  CalendarDays,
  Flower,
  SunMedium,
  CloudRain,
  Snowflake,
} from 'lucide-react'

export default function Movimentos() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-cyan-500/20 rounded-2xl glow-box">
          <RotateCw className="w-8 h-8 text-cyan-400 animate-float" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">Os Movimentos da Terra</h2>
      </div>

      <Card className="border-cyan-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-cyan-400">
            <RotateCw className="w-6 h-6" />
            Movimento de Rotação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            A Terra gira em torno de <strong>si mesma</strong>, como um pião! Esse é o{' '}
            <strong>movimento de rotação</strong>.
          </p>
          <div className="p-4 bg-cyan-950/40 rounded-xl border border-cyan-500/30">
            O movimento de rotação é responsável pelo <strong>dia e a noite</strong>. A Terra leva{' '}
            <strong>24 horas</strong> (1 dia) para dar uma volta completa.
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-orange-400">
            <Sun className="w-6 h-6" />
            Movimento de Translação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            Ao mesmo tempo que a Terra gira em torno de si mesma, ela também gira{' '}
            <strong>ao redor do Sol!</strong> Esse é o <strong>movimento de translação</strong>.
          </p>
          <div className="p-4 bg-orange-950/30 rounded-xl border border-orange-500/30">
            O movimento de translação é responsável pelas <strong>estações do ano</strong>. A Terra
            leva <strong>365 dias e 6 horas</strong> (1 ano) para dar uma volta completa ao redor do
            Sol.
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-emerald-400">
            <CalendarDays className="w-6 h-6" />
            As 4 Estações do Ano
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-800 text-slate-200">
                  <th className="p-4 font-bold">Estação</th>
                  <th className="p-4 font-bold">Características (Hemisfério Sul)</th>
                  <th className="p-4 font-bold">Início</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-t border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 flex items-center gap-2 font-bold text-pink-400">
                    <Flower className="w-5 h-5" /> Primavera
                  </td>
                  <td className="p-4 text-sm">
                    Temperaturas amenas, dias mais longos, flores desabrochando
                  </td>
                  <td className="p-4 text-sm whitespace-nowrap">~22 de setembro</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 flex items-center gap-2 font-bold text-yellow-400">
                    <SunMedium className="w-5 h-5" /> Verão
                  </td>
                  <td className="p-4 text-sm">
                    Temperaturas elevadas, dias mais longos que as noites
                  </td>
                  <td className="p-4 text-sm whitespace-nowrap">~21 de dezembro</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 flex items-center gap-2 font-bold text-orange-400">
                    <CloudRain className="w-5 h-5" /> Outono
                  </td>
                  <td className="p-4 text-sm">
                    Temperaturas caindo, folhas caem das árvores (tons amarelados)
                  </td>
                  <td className="p-4 text-sm whitespace-nowrap">~20 de março</td>
                </tr>
                <tr className="border-t border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 flex items-center gap-2 font-bold text-cyan-300">
                    <Snowflake className="w-5 h-5" /> Inverno
                  </td>
                  <td className="p-4 text-sm">
                    Temperaturas baixas, noites mais longas, dias mais curtos
                  </td>
                  <td className="p-4 text-sm whitespace-nowrap">~21 de junho</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500 bg-amber-950/20 backdrop-blur">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-500 text-xl mb-2">Cuidado para não confundir!</h3>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-slate-200 mb-3 font-medium">
                <p>
                  <strong>Rotação</strong> = Terra gira em torno de si mesma →{' '}
                  <strong>dia e noite</strong>
                </p>
                <p>
                  <strong>Translação</strong> = Terra gira ao redor do Sol →{' '}
                  <strong>estações do ano</strong>
                </p>
              </div>
              <p className="text-amber-200/80 text-sm">
                Pense assim: "Rotação" tem "t" de "todo dia" (dia e noite). "Translação" tem "l" de
                "longo" (1 ano)!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

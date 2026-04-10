import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sprout,
  Droplets,
  FilterX,
  Scissors,
  Tractor,
  ShieldAlert,
  TestTube,
  Leaf,
  AlertCircle,
} from 'lucide-react'

export default function Solo() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-emerald-500/20 rounded-2xl glow-box shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <Sprout className="w-8 h-8 text-emerald-400 animate-float" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white">O Solo</h2>
      </div>

      <Card className="border-emerald-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-emerald-400">
            <Tractor className="w-6 h-6" />
            Práticas agrícolas (cuidados com o solo)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
              <Droplets className="w-8 h-8 text-blue-400" />
              <h4 className="font-bold text-slate-200 text-sm">Irrigação</h4>
              <p className="text-xs text-slate-400">Levar água para terrenos secos</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
              <FilterX className="w-8 h-8 text-cyan-400" />
              <h4 className="font-bold text-slate-200 text-sm">Drenagem</h4>
              <p className="text-xs text-slate-400">Retirar excesso de água do terreno alagado</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
              <Scissors className="w-8 h-8 text-stone-400" />
              <h4 className="font-bold text-slate-200 text-sm">Aração</h4>
              <p className="text-xs text-slate-400">Revolver/misturar a terra antes de plantar</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
              <Sprout className="w-8 h-8 text-emerald-400" />
              <h4 className="font-bold text-slate-200 text-sm">Adubação</h4>
              <p className="text-xs text-slate-400">Enriquecer o solo com nutrientes</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-2 hover:bg-slate-800 transition-colors">
              <Leaf className="w-8 h-8 text-amber-500" />
              <h4 className="font-bold text-slate-200 text-sm">Agricultura</h4>
              <p className="text-xs text-slate-400">Cultivar o solo para produzir vegetais</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-lime-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-lime-400">
            <TestTube className="w-6 h-6" />
            Tipos de Adubação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-lime-950/20 rounded-xl border border-lime-800/50 space-y-3">
              <h4 className="font-bold text-lime-400 flex items-center gap-2 text-lg">
                <Leaf className="w-5 h-5" /> Adubação Orgânica
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • Vem da <strong>natureza</strong>
                </li>
                <li>• Restos de frutas, cascas de verduras, folhas, esterco</li>
                <li>• Melhor para o meio ambiente</li>
              </ul>
            </div>
            <div className="p-5 bg-cyan-950/20 rounded-xl border border-cyan-800/50 space-y-3">
              <h4 className="font-bold text-cyan-400 flex items-center gap-2 text-lg">
                <TestTube className="w-5 h-5" /> Adubação Química/Industrial
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • Feita em <strong>fábricas</strong>
                </li>
                <li>• Fertilizantes granulados (bolinhas azuis/coloridas)</li>
                <li>
                  • Usada em <strong>grandes lavouras</strong>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-red-400">
            <AlertCircle className="w-6 h-6" />
            Erosão
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            A <strong>erosão</strong> é a destruição e o transporte do solo feitos pela ação da{' '}
            <strong>água</strong>, do <strong>vento</strong> ou pela <strong>ação humana</strong>{' '}
            (como desmatar florestas).
          </p>
          <div className="p-4 bg-red-950/30 rounded-xl border border-red-500/30 text-red-200">
            A erosão destrói o solo! Parece que a terra foi "comida" pela água, formando buracos e
            valas enormes.
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-500/30 bg-card/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-purple-400">
            <ShieldAlert className="w-6 h-6" />
            Agrotóxicos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-200 text-lg">
          <p>
            São substâncias usadas para combater pragas nas plantações. Mas eles podem ser{' '}
            <strong>prejudiciais ao solo e ao ser humano!</strong>
          </p>
          <div className="p-4 bg-purple-950/30 rounded-xl border border-purple-500/30 text-purple-200 font-medium">
            Agrotóxicos ≠ fertilizantes. Agrotóxicos combatem pragas, mas podem fazer mal à saúde e
            ao meio ambiente.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, XCircle, Trophy, RotateCcw, Gamepad2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const questions = [
  {
    question: 'Qual o nome da explosão que deu origem ao universo?',
    options: ['Supernova', 'Big Bang', 'Via Láctea', 'Erosão'],
    correct: 1,
  },
  {
    question: 'Como se chama a nossa galáxia?',
    options: ['Andrômeda', 'Sistema Solar', 'Via Láctea', 'Nebulosa'],
    correct: 2,
  },
  {
    question: 'O Sol é um(a)...',
    options: ['Planeta gigante', 'Estrela', 'Satélite natural', 'Planeta anão'],
    correct: 1,
  },
  {
    question: "Qual planeta é conhecido como 'Planeta Vermelho'?",
    options: ['Vênus', 'Júpiter', 'Marte', 'Mercúrio'],
    correct: 2,
  },
  {
    question: 'Desde 2006, Plutão é considerado um:',
    options: ['Planeta gasoso', 'Satélite', 'Planeta rochoso', 'Planeta anão'],
    correct: 3,
  },
  {
    question: 'A Lua é um satélite:',
    options: ['Artificial', 'Natural', 'Gasoso', 'Rochoso'],
    correct: 1,
  },
  {
    question: 'Qual movimento da Terra é responsável pelo dia e a noite?',
    options: ['Translação', 'Rotação', 'Erosão', 'Adubação'],
    correct: 1,
  },
  {
    question: 'O movimento de translação (que dura 1 ano) causa:',
    options: ['As fases da Lua', 'O dia e a noite', 'As estações do ano', 'Os eclipses'],
    correct: 2,
  },
  {
    question: 'O que é Erosão?',
    options: [
      'Enriquecer o solo com nutrientes',
      'Destruição e transporte do solo',
      'Plantar sementes',
      'Regar as plantas',
    ],
    correct: 1,
  },
  {
    question: 'Adubação orgânica vem de:',
    options: [
      'Fábricas de produtos químicos',
      'Agrotóxicos',
      'Restos de frutas, folhas e esterco',
      'Plástico reciclado',
    ],
    correct: 2,
  },
]

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAns, setSelectedAns] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const handleAnswer = (idx: number) => {
    if (showFeedback) return

    setSelectedAns(idx)
    setShowFeedback(true)

    const isCorrect = idx === questions[currentIdx].correct
    if (isCorrect) {
      setScore((s) => s + 1)
    }

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((c) => c + 1)
        setSelectedAns(null)
        setShowFeedback(false)
      } else {
        setIsFinished(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentIdx(0)
    setScore(0)
    setSelectedAns(null)
    setShowFeedback(false)
    setIsFinished(false)
  }

  if (isFinished) {
    const isPerfect = score === questions.length
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-slide-up space-y-6">
        <div className="relative">
          <Trophy
            className={cn(
              'w-32 h-32',
              isPerfect ? 'text-yellow-400 animate-bounce' : 'text-blue-400',
            )}
          />
          {isPerfect && <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />}
        </div>
        <h2 className="text-4xl font-display font-bold text-white text-center">
          {isPerfect ? 'Perfeito!' : 'Fim de Jogo!'}
        </h2>
        <p className="text-2xl text-slate-300">
          Você acertou <span className="text-cyan-400 font-bold">{score}</span> de{' '}
          {questions.length} perguntas!
        </p>
        <Button
          onClick={resetQuiz}
          size="lg"
          className="mt-8 bg-purple-600 hover:bg-purple-700 text-lg rounded-full px-8 py-6 h-auto"
        >
          <RotateCcw className="mr-2 w-6 h-6" /> Jogar Novamente
        </Button>
      </div>
    )
  }

  const currentQ = questions[currentIdx]
  const progress = (currentIdx / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-4 justify-center">
        <Gamepad2 className="w-8 h-8 text-rose-400" />
        <h2 className="text-3xl font-display font-bold text-white">Quiz Espacial</h2>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-400 font-bold">
          <span>
            Pergunta {currentIdx + 1} de {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <Progress value={progress} className="h-3 bg-slate-800" />
      </div>

      <Card className="border-slate-600 bg-card/90 backdrop-blur shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-white leading-relaxed text-center font-display">
            {currentQ.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            let stateClass = 'bg-slate-800/80 hover:bg-slate-700 border-slate-600 text-slate-200'

            if (showFeedback) {
              if (idx === currentQ.correct) {
                stateClass =
                  'bg-emerald-600/20 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
              } else if (idx === selectedAns) {
                stateClass = 'bg-red-600/20 border-red-500 text-red-100'
              } else {
                stateClass = 'bg-slate-800/40 border-slate-700/50 text-slate-500 opacity-50'
              }
            }

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => handleAnswer(idx)}
                className={cn(
                  'w-full p-4 rounded-xl border-2 text-left text-lg font-medium transition-all duration-300 flex items-center justify-between',
                  stateClass,
                  !showFeedback && 'hover:scale-[1.02]',
                )}
              >
                <span>{opt}</span>
                {showFeedback && idx === currentQ.correct && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                )}
                {showFeedback && idx === selectedAns && idx !== currentQ.correct && (
                  <XCircle className="w-6 h-6 text-red-400" />
                )}
              </button>
            )
          })}
        </CardContent>
        {showFeedback && (
          <CardFooter className="justify-center animate-fade-in">
            <p
              className={cn(
                'font-bold text-lg',
                selectedAns === currentQ.correct ? 'text-emerald-400' : 'text-red-400',
              )}
            >
              {selectedAns === currentQ.correct ? 'Acertou! 🌟' : 'Ops! Quase lá! 🚀'}
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

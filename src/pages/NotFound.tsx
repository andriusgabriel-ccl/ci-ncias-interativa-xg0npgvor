import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 bg-starfield">
      <div className="text-center space-y-6 max-w-md bg-card/80 p-8 rounded-3xl border border-slate-700 backdrop-blur-md">
        <Rocket className="w-24 h-24 mx-auto text-purple-400 animate-float" />
        <h1 className="text-5xl font-display font-bold text-white glow-text">404</h1>
        <p className="text-xl text-slate-300 font-medium">
          Ops! Parece que você se perdeu no espaço...
        </p>
        <p className="text-slate-400">
          A página que você está procurando não existe ou foi sugada por um buraco negro.
        </p>
        <Button asChild className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
          <Link to="/">Voltar para a Terra (Início)</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound

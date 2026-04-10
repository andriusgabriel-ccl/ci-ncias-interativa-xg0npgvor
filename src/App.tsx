import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import Universo from './pages/Universo'
import SistemaSolar from './pages/SistemaSolar'
import Estrelas from './pages/Estrelas'
import Planetas from './pages/Planetas'
import Lua from './pages/Lua'
import Movimentos from './pages/Movimentos'
import Solo from './pages/Solo'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Universo />} />
          <Route path="/sistema-solar" element={<SistemaSolar />} />
          <Route path="/estrelas" element={<Estrelas />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/lua" element={<Lua />} />
          <Route path="/movimentos" element={<Movimentos />} />
          <Route path="/solo" element={<Solo />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App

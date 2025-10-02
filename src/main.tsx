import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from '@/pages/HeroView'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
  </StrictMode>,
)

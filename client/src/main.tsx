import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

export function bootstrap() {
  createRoot(document.getElementById('root')!).render(<App />)
}

bootstrap()

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import App from './pages/MainPage/MainPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

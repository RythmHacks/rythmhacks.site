import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './page'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Home />
    </StrictMode>,
  )
} else {
  throw new Error("Root element not found")
}

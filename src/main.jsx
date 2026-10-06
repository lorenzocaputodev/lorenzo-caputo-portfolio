// --- Avvio dell'app nel browser ---
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { languageFromPath } from './content'
import './styles/index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App language={languageFromPath(window.location.pathname)} />
  </StrictMode>
)

if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)

// --- Stampa: carica subito le immagini differite ---
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('img[loading="lazy"]').forEach((image) => {
    image.loading = 'eager'
  })
})

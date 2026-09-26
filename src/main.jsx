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

// Production pages are prerendered (scripts/prerender.js): hydrate them. The dev server serves an empty
// shell that only holds the <!--app-html--> placeholder comment, so look for elements, not any node.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)

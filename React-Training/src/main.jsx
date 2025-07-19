import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div><h1>hello</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi.</p></div>
  </StrictMode>,
)

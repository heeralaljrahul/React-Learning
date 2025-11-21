import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Where react is rendered to the DOM
createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
    </StrictMode>,
)
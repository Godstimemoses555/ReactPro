import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.jsx'

emailjs.init('0OLUaroa-kjXpjpNA');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

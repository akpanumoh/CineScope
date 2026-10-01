import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { NameContext } from './context/UserContext.jsx'
import { MovieContext } from './context/MovieContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <NameContext>
    <MovieContext>
       <App />
    </MovieContext>
    </NameContext>
    
    </BrowserRouter>
   
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/globals.css'
import Principal from './main/Principal'
import SobreNosotros from './pages/SobreNosotros'
import Portafolio from './pages/Portafolio'
import Servicios from './pages/Servicios'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 🚨 ¡Añade el basename aquí! 🚨 */}
    <Router basename="/DUSK-LIGHT"> 
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  </StrictMode>,
)
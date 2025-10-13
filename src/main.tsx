import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/globals.css'
import Principal from './main/pages/Principal'
import SobreNosotros from './main/pages/SobreNosotros'
import Portafolio from './main/pages/Portafolio'
import Servicios from './main/pages/Servicios'
import Tienda from './main/pages/Tienda'
import Contacto from './main/pages/Contacto'

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
);

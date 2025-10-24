import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/globals.css'
import Principal from './main/pages/Principal'
import SobreNosotros from './main/pages/SobreNosotros'
import Portafolio from './main/pages/Portafolio'
import Servicios from './main/pages/Servicios'
import Contacto from './main/pages/Contacto'
import PaqueteRetratoIndividual from './main/pages/PaqueteRetratoIndividual';
import PaquetePareja from './main/pages/PaquetePareja';
import PaqueteFamiliar from './main/pages/PaqueteFamiliar';
import PackRedesSociales from './main/pages/PackRedesSociales';
import PaqueteEventoCorporativo from './main/pages/PaqueteEventoCorporativo';
import PaqueteArtistica from './main/pages/PaqueteArtistica';
import Tienda from './main/pages/Tienda'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 🚨 ¡Añade el basename aquí! 🚨 */}
    <Router basename="/DUSK-LIGHT"> 
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/paquetes/1" element={<PaqueteRetratoIndividual />} />
        <Route path="/paquetes/2" element={<PaquetePareja />} />
        <Route path="/paquetes/3" element={<PaqueteFamiliar />} />
        <Route path="/paquetes/4" element={<PackRedesSociales />} />
        <Route path="/paquetes/5" element={<PaqueteEventoCorporativo />} />
        <Route path="/paquetes/6" element={<PaqueteArtistica />} />
      </Routes>
    </Router>
  </StrictMode>,
);

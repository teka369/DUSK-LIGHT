import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from '../pages/Principal';
import SobreNosotros from '../pages/SobreNosotros';
import Portafolio from '../pages/Portafolio';
import Servicios from '../pages/Servicios';
import Contacto from '../pages/Contacto';
import PaqueteRetratoIndividual from '../pages/PaqueteRetratoIndividual';
import PaquetePareja from '../pages/PaquetePareja';
import PaqueteFamiliar from '../pages/PaqueteFamiliar';
import PackRedesSociales from '../pages/PackRedesSociales';
import PaqueteEventoCorporativo from '../pages/PaqueteEventoCorporativo';
import PaqueteArtistica from '../pages/PaqueteArtistica';
import Tienda from '../pages/Tienda';

const App = () => {
  return (
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
  );
};

export default App;

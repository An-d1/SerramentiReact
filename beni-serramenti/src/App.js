import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Finestre from './Pages/Finestre/Finestre'
import ContactForm from './Pages/ContactForm/ContactForm';
import Tapparelle from './Pages/Tapparelle/Tapparelle';
import Zanzariere from './Pages/Zanzariere/Zanzariere';
import PorteBlindate from './Pages/PorteBlindate/PorteBlindate';
import PorteInterneEsterne from './Pages/PorteInterneEsterne/PorteInterneEsterne';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/finestre" element={<Finestre />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/porteBlindate" element={<PorteBlindate />}/>
        <Route path="/porteInterneEsterne" element={<PorteInterneEsterne />}/>
        <Route path="/tapparelle" element={<Tapparelle />}/>  
        <Route path="/zanzariere" element={<Zanzariere />}/>
      </Routes>
    </Router>

      
  );
}

export default App;

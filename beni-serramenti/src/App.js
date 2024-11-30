import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import  HomePage from './Pages/HomePage'
import  Prodotti from './Pages/Prodotti'
import ContactForm from './Pages/ContactForm/ContactForm';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/prodotti" element={<Prodotti />}/>
        <Route path="/contact" element={<ContactForm />}/>
      </Routes>
    </Router>

      
  );
}

export default App;

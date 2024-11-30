import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import  HomePage from './Pages/HomePage'
import  Prodotti from './Pages/Prodotti'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/prodotti" element={<Prodotti />}/>
      </Routes>
    </Router>

      
  );
}

export default App;

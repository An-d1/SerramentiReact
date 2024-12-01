import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/Navbar/navbar.css';
import './Components/BackgroundImg/backgroundImg.css';
import './Components/ScopriProdottiBtn/scopriProdotti.css';
import './Pages/ContactForm/contactForm.css'
import './Components/Footer/footer.css'
import './Pages/Finestre/prodotti.css'
import './Components/CollapseMenu/collapseMenu.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

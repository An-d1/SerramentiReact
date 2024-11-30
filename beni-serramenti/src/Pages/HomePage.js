import Navbar from '../Components/Navbar/Navbar';
import BacgroundImg from '../Components/BackgroundImg/BacgroundImg';
import ScopriProdotti from '../Components/ScopriProdottiBtn/ScopriProdottiBtn';
import ContactForm from './ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer';

function HomePage() {

  const prodottiPath = "/prodotti"
  const contactPath = "/contact"

  const firstInput = "Scopri";
  const secondInput = "i";
  const thirdInput = "Prodotti";

  const firstInputC = "Contattaci"
  const secondInputC =  "Qui"
  const thirdInputC = " !! "


  return (
    <>
    <Navbar></Navbar>
      <BacgroundImg></BacgroundImg>
      <div className='text-center' style={{ paddingTop: '8rem' }} 
      data-aos="fade-right">
        <h1>
          "Dove il miglior prezzo incontra <br></br>la migliore qualità!"
        </h1>
      </div>
      <ScopriProdotti 
        specifiedPath={prodottiPath}
        firstInput={firstInput}
        secondInput={secondInput}
        thirdInput={thirdInput}></ScopriProdotti>
      
      <div className='text-center' style={{ paddingTop: '8rem' }}
      data-aos="fade-left">
        <h1>
          Sei interesato? Contattaci!!
        </h1>
        <ScopriProdotti
          specifiedPath={contactPath}
          firstInput={firstInputC}
          secondInput={secondInputC}
          thirdInput={thirdInputC}
        ></ScopriProdotti>
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
import Navbar from '../Components/Navbar/Navbar';
import BacgroundImg from '../Components/BackgroundImg/BacgroundImg';
import ScopriProdotti from '../Components/ScopriProdottiBtn/ScopriProdottiBtn';
import ContactForm from '../Components/ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer';

function HomePage() {
  return (
    <>
    <Navbar></Navbar>
      <BacgroundImg></BacgroundImg>
      <div className='text-center pt-5'>
        <h1>
          "Dove il miglior prezzo incontra <br></br>la migliore qualità!"
        </h1>
      </div>
      <ScopriProdotti></ScopriProdotti>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
import './App.css';
import Navbar from './Navbar/Navbar';
import BacgroundImg from './BackgroundImg/BacgroundImg';
import ScopriProdotti from './ScopriProdottiBtn/ScopriProdottiBtn';

function App() {
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
    </>
  );
}

export default App;

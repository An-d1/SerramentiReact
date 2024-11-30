import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import goldenWindow from '../Images/Golden-OAK.webp';
import anthracite from '../Images/ANTHRACITE-1.webp';
import silver from '../Images/win_0.webp';

function Prodotti() {
  return(
    <>
      <Navbar></Navbar>
      
        
        
      <div className='container-fluid products-container'>
        <div className='row '>
          <div className='col-6 d-flex justify-content-center align-items-center left-window'>
            <img src={goldenWindow} alt='finestre'/>
          </div>

          <div className='col-6 d-flex justify-content-center align-items-center'> 
            <button type="button" class="products-button fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Scopri di più
            </button>
          

          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-1" id="staticBackdropLabel">bluEvolution82</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Sistemi del futuro: La serie di profili bluEvolution con una profondità costruttiva di 82 mm. Combina un’eccezionale conservazione dell’energia con una tecnologia di tenuta innovativa ai massimi livelli ed è particolarmente adatta come componente per le case passive. Le perdite di calore sono ridotte grazie all’uso di queste cornici e battenti ottimizzati in combinazione con un vetro triplo isolante dotato di un sigillo perimetrale termicamente migliorato. E questo ti fa risparmiare!
                </div>
                <div class="modal-footer">
                  <button type="button" class="products-button" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        
        <div className='row'>
          <div className='col-6 d-flex justify-content-center align-items-center'> 
          <div className='col-6 d-flex justify-content-center align-items-center'> 
            <button type="button" class="products-button fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Scopri di più
            </button>
          

          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-1" id="staticBackdropLabel">proevolution72</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Il sistema di finestre Salamander Pro 72 MD combina soluzioni tecnologiche, ecologiche ed estetiche avanzate, rispondendo alle sfide del mercato odierno in termini di efficienza energetica, design, comfort dell’utente, sicurezza e durabilità.
                </div>
                <div class="modal-footer">
                  <button type="button" class="products-button" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

          <div className='col-6 d-flex justify-content-center align-items-center right-window'>
            <img src={anthracite} alt='finestre'/>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Prodotti;
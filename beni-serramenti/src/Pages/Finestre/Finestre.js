import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CollapseMenu from '../../Components/CollapseMenu/CollapseMenu';
import goldenWindow from '../../Images/Golden-OAK.webp';
import anthracite from '../../Images/ANTHRACITE-1.webp';
import silver from '../../Images/win_0.webp';

function Finestre() {

  const path0 = "/finestre"
  const path1 = "/tapparelle"
  const path2 = "/zanzariere"
  const path3 = "/porteBlindate"
  const path4 = "/porteInterneEsterne"

  const active = "active"

  return(
    <>
      <Navbar></Navbar>

      <div>
        <h1 className='text-center mb-5 mt-3'>
           Cosa offriamo?
        </h1>
      </div>

      <CollapseMenu
        currentPath={path0}

        isActiveClass={active}
        path1={path1}
        path2={path2}
        path3={path3}
        path4={path4}
       
      ></CollapseMenu>
      <div className='container-fluid products-container'>
        <div className='row'>
          
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center one-window'>
            <img src={goldenWindow} alt='finestre'/>
          </div>

          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'> 
            <button type="button" className="products-button fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Scopri di più
            </button>
          
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-1" id="staticBackdropLabel">bluEvolution82</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Sistemi del futuro: La serie di profili bluEvolution con una profondità costruttiva di 82 mm. Combina un’eccezionale conservazione dell’energia con una tecnologia di tenuta innovativa ai massimi livelli ed è particolarmente adatta come componente per le case passive. Le perdite di calore sono ridotte grazie all’uso di queste cornici e battenti ottimizzati in combinazione con un vetro triplo isolante dotato di un sigillo perimetrale termicamente migliorato. E questo ti fa risparmiare!
                </div>
                <div className="modal-footer">
                  <button type="button" className="products-button" data-bs-dismiss="modal">Chiude</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div className='row'>
                    
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center order-lg-1 one-window'>
              <img src={anthracite} alt='finestre'/>
          </div>

          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'> 
            <button type="button" className="products-button fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Scopri di più
            </button>
          

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-1" id="staticBackdropLabel">proevolution72 md</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Il sistema di finestre Salamander Pro 72 MD combina soluzioni tecnologiche, ecologiche ed estetiche avanzate, rispondendo alle sfide del mercato odierno in termini di efficienza energetica, design, comfort dell’utente, sicurezza e durabilità.
                </div>
                <div className="modal-footer">
                  <button type="button" className="products-button" data-bs-dismiss="modal">Chiude</button>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        <div className='row'>

        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center one-window'>
            <img src={silver} alt='finestre'/>
         </div>
          
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'> 
            <button type="button" className="products-button fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Scopri di più
            </button>
          
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-1" id="staticBackdropLabel">proevolution72 md</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Il sistema di finestre Salamander Pro 72 MD combina soluzioni tecnologiche, ecologiche ed estetiche avanzate, rispondendo alle sfide del mercato odierno in termini di efficienza energetica, design, comfort dell’utente, sicurezza e durabilità.
                </div>
                <div className="modal-footer">
                  <button type="button" className="products-button" data-bs-dismiss="modal">Chiude</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
}

export default Finestre;
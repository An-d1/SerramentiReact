import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CollapseMenu from '../../Components/CollapseMenu/CollapseMenu';
import Modal from '../../Components/Modal/Modal';
import goldenWindow from '../../Images/Golden-OAK.webp';
import anthracite from '../../Images/ANTHRACITE-1.webp';
import silver from '../../Images/win_0.webp';

function Finestre() {

  const firstModalHeader = "bluEvolution82";
  const firstModalBody = " Sistemi del futuro: La serie di profili bluEvolution con una profondità costruttiva di 82 mm. Combina un’eccezionale conservazione dell’energia con una tecnologia di tenuta innovativa ai massimi livelli ed è particolarmente adatta come componente per le case passive. Le perdite di calore sono ridotte grazie all’uso di queste cornici e battenti ottimizzati in combinazione con un vetro triplo isolante dotato di un sigillo perimetrale termicamente migliorato. E questo ti fa risparmiare!";

  const secondModalHeader = "proevolution72 md";
  const secondModalBody = "Il sistema di finestre Salamander Pro 72 MD combina soluzioni tecnologiche, ecologiche ed estetiche avanzate, rispondendo alle sfide del mercato odierno in termini di efficienza energetica, design, comfort dell’utente, sicurezza e durabilità."

  const thirdModalHeader = "greenevolution76"
  const thirdModalBody = "greenEvolution è il sistema di finestre sostenibile per la ristrutturazione di edifici storici, ristrutturazioni e nuovi progetti di costruzione. Lo stile giusto può essere fornito per ogni tipo di finestra, dai telai delle finestre in stile wilhelminiano a finestre moderne a tutta altezza in vetro: montanti per vetro, finestre a battente singolo o doppio con o senza vetro fisso.Con greenEvolution, una finestra diventa la tua finestra personale. Sono disponibili cinque diversi battenti per questo sistema di profili. Possono essere altamente personalizzati con decorazioni o scocche in alluminio per adattarsi perfettamente alle tue preferenze di facciata e interior design."
  
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
          <Modal
            modalHeader={firstModalHeader}
            modalBody={firstModalBody}
          >
          </Modal>
          </div>
        </div>
        
        <div className='row'>
                    
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center order-lg-1 one-window'>
              <img src={anthracite} alt='finestre'/>
          </div>

          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'> 
            <Modal
            modalHeader={secondModalHeader}
            modalBody={secondModalBody}
            >
            
            </Modal>
          </div>

        </div>

        <div className='row'>

        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center one-window'>
            <img src={silver} alt='finestre'/>
         </div>
          
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'> 
            <Modal
            modalHeader={thirdModalHeader}
            modalBody={thirdModalBody}
            >
              
            </Modal>
          </div>
          
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
}

export default Finestre;
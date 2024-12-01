
function Modal({ modalHeader, modalBody }) {
  return (
    <>
      <button type="button" className="products-button fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Scopri di più
            </button>
          
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-1" id="staticBackdropLabel">
                    {modalHeader}
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {modalBody}
                </div>
                <div className="modal-footer">
                  <button type="button" className="products-button" data-bs-dismiss="modal">Chiude</button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Modal;
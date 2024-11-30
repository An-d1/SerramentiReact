
function ContactForm() {
  return(
    <>
    <div className="container-fluid mt-5 form-container" id="contactForm">
    <div className="row">
    <div className="col-6">
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="floatingInput" placeholder="Nome" name="nome" />
      <label for="floatingInput">Nome</label>
    </div>
    </div>
    <div className="col-6">
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="floatingInput" placeholder="Cognome" name="cognome" />
      <label for="floatingInput">Cognome</label>
    </div>
    </div>
    <div className="col-12">
    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
      <label for="floatingInput">Email</label>
    </div>
    </div>
    <div className="col-12">
    <div className="form-floating mb-3">
      <input type="number" className="form-control" id="floatingInput" placeholder="telefono" name="telefono" />
      <label for="floatingInput">telefono</label>
    </div>
    </div>
    <div className="col-12">
    <div class="form-floating mb-3">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      <label for="floatingTextarea">Messagio</label>
    </div>
    </div>
    <div className="col-12">
    <button class="form-btn mb-3" type="submit">Invio</button>
    </div>
    </div>
    </div>
  </>
  );
}

export default ContactForm;
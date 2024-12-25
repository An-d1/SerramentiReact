import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    messagio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred. Please check your network and try again.");
    }
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="container-fluid form-container" id="contactForm">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Nome</label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Cognome"
                  name="cognome"
                  value={formData.cognome}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Cognome</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Telefono</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  name="messagio"
                  value={formData.messagio}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="floatingTextarea">Messagio</label>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <button className="form-btn mb-3" type="submit">Invio</button>
            </div>
            <div className="col-12 col-lg-4 contact-email">
              Email: baraarben@gmail.com
            </div>
            <div className="col-12 col-lg-4 contact-tel">
              Tel: 00 39 327 8366688
            </div>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ContactForm;

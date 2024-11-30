/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"

function contactFormScroll() {
  const contactStart = document.getElementById("contactForm");
  if (contactStart) {
    contactStart.scrollIntoView({ behavior: "smooth" }); // Smoothly scrolls to the target element
  }
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
      <Link className="navbar-brand" to="/">BENI</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link me-3" to="/">Home</Link>
        <Link className="nav-link me-3" to="/prodotti">Prodotti</Link>
        <Link className="nav-link me-3" to="/contact" onClick={contactFormScroll}>Contact</Link>
        
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
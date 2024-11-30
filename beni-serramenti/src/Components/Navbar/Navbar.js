/* eslint-disable jsx-a11y/anchor-is-valid */

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
      <a className="navbar-brand" href='{index.html}'>BENI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link me-3" aria-current="page" href="{#}">Home</a>
        <a className="nav-link me-3" href="{#}">Prodotti</a>
        <a className="nav-link me-3" onClick={contactFormScroll}>Contact</a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
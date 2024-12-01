import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CollapseMenu from "../../Components/CollapseMenu/CollapseMenu";

function Zanzaniere() {
  const currentPath = "/zanzaniere"
  const path1 = "/tapparelle"
  const path2 = "/finestre"
  const path3 = "/porteBlindate"
  const path4 = "/porteInterneEsterne"

  const thisActive = "Zanzariere"
  const first = "Tapparelle"
  const second = "Finestre"
  const third = "Porte Blindate"
  const fourth = "Porte Interne & Esterne"
  return (
    <>
      <Navbar></Navbar>
      <CollapseMenu
        currentPath={currentPath}
        path1={path1}
        path2={path2}
        path3={path3}
        path4={path4}
        activeProduct={thisActive}
        firstProduct={first}
        secondProduct={second}
        thirdProduct={third}
        fourthProduct={fourth}
      ></CollapseMenu>
      <Footer></Footer>
    </>
  );
}

export default Zanzaniere;
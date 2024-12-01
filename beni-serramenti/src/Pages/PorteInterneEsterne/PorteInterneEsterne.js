import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CollapseMenu from "../../Components/CollapseMenu/CollapseMenu";

function PorteInterneEsterne() {
  const currentPath = "/porteInterneEsterne"
  const path1 = "/tapparelle"
  const path2 = "/zanzariere"
  const path3 = "/porteBlindate"
  const path4 = "/finestre"

  const thisActive = "Porte Interne & Esterne"
  const first = "Tapparelle"
  const second = "Zanzariere"
  const third = "Porte Blindate"
  const fourth = "Finestre"
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

export default PorteInterneEsterne;
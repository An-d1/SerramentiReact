import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CollapseMenu from "../../Components/CollapseMenu/CollapseMenu";

function PorteBlindate() {
  const currentPath = "/porteBlindate"
  const path1 = "/tapparelle"
  const path2 = "/zanzaniere"
  const path3 = "/finestre"
  const path4 = "/porteInterneEsterne"

  const thisActive = "Porte Blindate"
  const first = "Tapparelle"
  const second = "Zanzariere"
  const third = "Finestre"
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

export default PorteBlindate;
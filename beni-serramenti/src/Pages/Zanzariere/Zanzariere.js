import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CollapseMenu from "../../Components/CollapseMenu/CollapseMenu";

function Zanzariere() {
  const path0 = "/finestre"
  const path1 = "/tapparelle"
  const path2 = "/zanzariere"
  const path3 = "/porteBlindate"
  const path4 = "/porteInterneEsterne"

  const acive = "active"
  return (
    <>
      <Navbar></Navbar>
      <CollapseMenu
        path0={path0}

        isActiveClass2={acive}
        path1={path1}
        path2={path2}
        path3={path3}
        path4={path4}
      
      ></CollapseMenu>
      <Footer></Footer>
    </>
  );
}

export default Zanzariere;
import { Link } from "react-router-dom";

function ScopriProdotti({ firstInput, secondInput, thirdInput, specifiedPath }) {
  return (
  
    <div>     
    <Link to={specifiedPath}>
    <div className='container-fluid  d-flex justify-content-center'>  
    <a href='{#}'>
    <div className='row'>
    <div className='col-12'>
    <div className='scopri-btn'>
      <div className="text">
        <span>{firstInput}</span>
        <span>{secondInput}</span>
        <span>{thirdInput}</span>
      </div>
      <div className="clone">
        <span>{firstInput}</span>
        <span>{secondInput}</span>
        <span>{thirdInput}</span>
      </div>
      <svg
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
    </div>
    </div>
    </a>     
    </div>
    </Link> 
    </div>);
}

export default ScopriProdotti;
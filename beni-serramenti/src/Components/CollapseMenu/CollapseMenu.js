import { Link } from "react-router-dom";

function CollapseMenu({ path0, path1, path2, path3, path4, isActiveClass, isActiveClass1, isActiveClass2, isActiveClass3, isActiveClass4}) {
  return (
    <>
      <p className="d-flex justify-content-center gap-1">
        <a className="collapse-btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Prodotti
        </a>

      </p>
      <div className="collapse collapse" id="collapseExample">
        <div className="card card-body d-flex align-items-center">
        <div className="list-group">
          <Link 
          to={ path0 }>
          <div className={`list-group-item list-group-item-action ${isActiveClass}`}>
            Finestre
          </div>
          </Link>
          
          <Link
          to={ path1 }
          >
            <div className={`list-group-item list-group-item-action ${isActiveClass1}`}>Tapparelle</div>
          </Link>
          
          <Link
          to={ path2 }
          >
            <div className={`list-group-item list-group-item-action ${isActiveClass2}`}>Zanzariere</div>
          </Link>

          <Link
          to={ path3 }
          >
            <div className={`list-group-item list-group-item-action ${isActiveClass3}`}>Porte Blindate</div>
          </Link>

          <Link
          to={ path4 }
          >
            <div className={`list-group-item list-group-item-action ${isActiveClass4}`}>Porte Interne & Esterne</div>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default CollapseMenu;
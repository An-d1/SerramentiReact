import { Link } from "react-router-dom";

function CollapseMenu({ currentPath, path1, path2, path3, path4, activeProduct, firstProduct, secondProduct,thirdProduct,fourthProduct }) {
  return (
    <>
      <p class="d-flex justify-content-center gap-1">
        <a class="collapse-btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Prodotti
        </a>

      </p>
      <div class="collapse collapse" id="collapseExample">
        <div class="card card-body d-flex align-items-center">
        <div class="list-group">
          <Link 
          to={ currentPath }>
          <div class="list-group-item list-group-item-action active" aria-current="true">
          {activeProduct}
          </div>
          </Link>
          
          <Link
          to={ path1 }
          >
            <div class="list-group-item list-group-item-action">{firstProduct}</div>
          </Link>
          
          <Link
          to={ path2 }
          >
            <div class="list-group-item list-group-item-action">{secondProduct}</div>
          </Link>

          <Link
          to={ path3 }
          >
            <div class="list-group-item list-group-item-action">{thirdProduct}</div>
          </Link>

          <Link
          to={ path4 }
          >
            <div class="list-group-item list-group-item-action">{fourthProduct}</div>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default CollapseMenu;
import { Link } from "react-router-dom";

function CollapseMenu({ activeProduct, firstProduct, secondProduct,thirdProduct,fourthProduct }) {
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
          to="/">
          <div class="list-group-item list-group-item-action active" aria-current="true">
          {activeProduct}
          </div>
          </Link>
          
          <div class="list-group-item list-group-item-action">{firstProduct}</div>
          <div class="list-group-item list-group-item-action">{secondProduct}</div>
          <div class="list-group-item list-group-item-action">{thirdProduct}</div>
          <div class="list-group-item list-group-item-action">{fourthProduct}</div>
          
        </div>
        </div>
      </div>
    </>
  );
}

export default CollapseMenu;
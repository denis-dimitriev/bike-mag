import "./CardItem.scss";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/favorite-heart.svg";
import { ReactComponent as ShoppingCartIcon } from "../../../assets/icons/shopping-cart.svg";
import Button from "../../atoms/ui/button/Button";

export const CardItem = () => {
  return (
    <div className="card-item-container">
      <div className="card-item-img">
        <img src="" alt="" />
      </div>
      <div className="card-item-body">
        <div className="body-top">
          <div className="title">Kugoo Kirin M4</div>
          <div className="params">
            <ul className="params-list">
              <li className="params-list-item">Param 1</li>
              <li className="params-list-item">Param 2</li>
              <li className="params-list-item">Param 3</li>
              <li className="params-list-item">Param 4</li>
            </ul>
          </div>
        </div>
        <div className="body-bottom">
          <div className="price">
            <span className="old-price">50000 MDL</span>
            <span className="current-price">45000 MDL</span>
          </div>
          <div className="actions">
            <span className="circle-btn">
              <FavoritesIcon />
            </span>
            <span className="circle-btn">
              <ShoppingCartIcon />
            </span>
          </div>
        </div>
        <Button variant="primary">Купить</Button>
      </div>
    </div>
  );
};

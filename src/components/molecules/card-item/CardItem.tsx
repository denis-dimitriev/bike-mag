import "./CardItem.scss";

import Button from "../../atoms/ui/button/Button";
import samo from "./samo.png";
import { Circle } from "../../atoms/ui/circle/Circle";
import { CartIcon, FavoriteIcon } from "../../../assets";

export const CardItem = () => {
  return (
    <div className="card-item-container">
      <div className="card-item-img">
        <img src={samo} alt="" />
      </div>
      <div className="card-item-body">
        <div className="title">Kugoo Kirin M4</div>
        <div className="params">
          <ul className="params-list">
            <li className="params-list-item">Param 1</li>
            <li className="params-list-item">Param 2</li>
            <li className="params-list-item">Param 3</li>
            <li className="params-list-item">Param 4</li>
          </ul>
        </div>

        <div className="body-bottom">
          <div className="price">
            <span className="old-price">50000 MDL</span>
            <span className="current-price">45000 MDL</span>
          </div>
          <div className="actions">
            <Circle>
              <FavoriteIcon />
            </Circle>
            <Circle>
              <CartIcon />
            </Circle>
          </div>
        </div>
        <Button variant="primary">Купить</Button>
      </div>
    </div>
  );
};

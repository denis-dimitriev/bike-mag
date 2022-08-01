import "./UserPanel.scss";

import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as FavoritesIcon } from "../../../assets/icons/favorite-heart.svg";
import { ReactComponent as ShoppingCartIcon } from "../../../assets/icons/shopping-cart.svg";

export const UserPanel = () => {
  return (
    <div className="user-panel">
      <UserIcon />
      <FavoritesIcon />
      <ShoppingCartIcon />
    </div>
  );
};

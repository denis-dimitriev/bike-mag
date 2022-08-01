import "./Header.scss";

import { HeaderTop } from "../../organisms/header-top/HeaderTop";
import { HeaderBottom } from "../../organisms/header-bottom/HeaderBottom,";
import Logo from "../../atoms/ui/logo/Logo";
import Button from "../../atoms/ui/button/Button";
import { ReactComponent as List } from "../../../assets/icons/list.svg";
import { Search } from "../../molecules/search/Search";
import { UserPanel } from "../../molecules/user-panel/UserPanel";

export const Header = () => {
  return (
    <header className="header-container">
      <HeaderTop />

      <div className="header-body">
        <Logo />
        <Button variant="primary">
          <List />
          Каталог
        </Button>
        <Search />
        <UserPanel />
      </div>

      <HeaderBottom />
    </header>
  );
};

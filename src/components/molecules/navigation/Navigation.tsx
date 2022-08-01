import "./Navigation.scss";

import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

const menuLinks = [
  { id: 1, title: "О магазине", path: "/about", active: false },
  {
    id: 2,
    title: "Доставка и оплата",
    path: "/delivery-and-pay",
    active: false,
  },
  { id: 3, title: "Блог", path: "/blog", active: false },
  { id: 4, title: "Контакты", path: "/contacts", active: false },
  { id: 5, title: "Акции", path: "/outlet", active: false },
];

export const Navigation = () => {
  const [links, setLinks] = useState(menuLinks);

  const setActiveLinkHandler = useCallback((id: number) => {
    setLinks((prevState) =>
      prevState.map((link) => {
        if (link.active) {
          link.active = false;
        }
        if (link.id === id) {
          link.active = true;
        }
        return link;
      })
    );
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav">
        {links.map(({ id, title, path, active }) => (
          <li
            key={id}
            className="nav-item"
            onClick={() => setActiveLinkHandler(id)}
          >
            <Link to={path} className={`nav-link ${active && "text-primary"}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

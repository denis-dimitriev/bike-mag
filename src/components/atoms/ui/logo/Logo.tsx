import "./Logo.scss";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">BikeMag</Link>
    </div>
  );
};

export default Logo;

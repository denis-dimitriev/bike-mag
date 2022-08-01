import "./Services.scss";

import { ReactComponent as LoginIcon } from "../../../assets/icons/log-in.svg";
import { ReactComponent as Viber } from "../../../assets/icons/social-icons/viber.svg";
import { ReactComponent as WhatsApp } from "../../../assets/icons/social-icons/whatsapp.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/social-icons/telegram.svg";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="services-container">
      <div className="list">
        <span className="text">Сервис</span>
        <span className="text">Сотрудничество</span>
        <span className="text">Заказать звонок</span>
      </div>
      <div className="social">
        <Viber />
        <WhatsApp />
        <Telegram />
      </div>
      <div className="services-login">
        <span className="badge text-bg-light ">Войти</span>
        <Link to={"/authentication"} className="login-icon">
          <LoginIcon />
        </Link>
      </div>
    </div>
  );
};

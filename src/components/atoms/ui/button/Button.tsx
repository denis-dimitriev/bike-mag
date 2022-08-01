import React, { ReactNode } from "react";

import "./Button.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
  variant?: "primary" | "danger" | "success" | "info" | "dark" | "light";
  size?: "lg" | "sm";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  variant,
  size,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { ReactNode } from "react";

import "./Circle.scss";

interface CircleProps {
  children: ReactNode;
}

export const Circle: React.FC<CircleProps> = ({ children }) => {
  return <span className="circle">{children}</span>;
};

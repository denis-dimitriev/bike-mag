import React, { ReactNode } from "react";

import "./Layout.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
};

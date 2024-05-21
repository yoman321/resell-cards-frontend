import React from "react";

import MainNavigation from "./MainNavigation.tsx";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <MainNavigation />
      {children}
    </div>
  );
};

export default Layout;

import React from "react";

import MainNavigation from "./MainNavigation.tsx";
import { ThemeProvider } from "../theme/ThemeProvider.tsx";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainNavigation />
      {children}
    </ThemeProvider>
  );
};

export default Layout;

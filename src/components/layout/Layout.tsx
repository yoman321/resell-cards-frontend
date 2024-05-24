import MainNavigation from "./MainNavigation.tsx";
import PageComponentsLayout from "./PageComponentsLayout.tsx";
import { ThemeProvider } from "../theme/ThemeProvider.tsx";
import { Props } from "../../interfaces/Interface.tsx";

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainNavigation />
      <PageComponentsLayout>{children}</PageComponentsLayout>
    </ThemeProvider>
  );
};

export default Layout;

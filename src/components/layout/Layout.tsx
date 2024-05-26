import MainNavigation from "./MainNavigation.tsx";
import { ThemeProvider } from "../theme/ThemeProvider.tsx";
import { Props } from "../../interfaces/Interface.tsx";

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainNavigation />
      <div className="flex justify-center rounded-md w-full">
        <div className="w-10/12">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

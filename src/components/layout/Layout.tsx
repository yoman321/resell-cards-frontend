import MainNavigation from "./MainNavigation.tsx";
import { ThemeProvider } from "../theme/ThemeProvider.tsx";
import { Props } from "../../interfaces/Interface.tsx";

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-full">
        <MainNavigation />
        <div className="h-5/6 rounded-md flex justify-center">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

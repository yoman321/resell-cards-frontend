import MainNavigation from "./MainNavigation.tsx";
import { ThemeProvider } from "../components/theme/ThemeProvider.tsx";
import { ChildrenProps } from "../interfaces/PropsInterface.tsx"

const Layout = ({ children }: ChildrenProps) => {
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

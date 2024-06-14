import { Link } from "react-router-dom";

import { ModeToggle } from "../components/theme/ThemeModeToggle";

const MainNavigation = () => {
  return (
    <div className="rounded-md mb-8">
      <header className="h-20 flex items-center justify-between px-3">
        <h3 className="text-5xl">Resell Cards</h3>
        <nav>
          <ul className="flex list-none items-baseline text-xl">
            <li className="ms-7">
              <Link to="/">Home</Link>
            </li>
            <li className="ms-7">
              <Link to="/inventory">Inventory</Link>
            </li>
            <li className="ms-7">
              <Link to="/contact_us">Contact Us</Link>
            </li>
            <li className="ms-7">
              <Link to="/login">Login</Link>
            </li>
            <li className="ms-7">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;

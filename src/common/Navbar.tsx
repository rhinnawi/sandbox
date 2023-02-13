import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavItem = {
  page: string;
  path: string;
};

export default function NavBar() {
  const navItems: NavItem[] = [
    { page: "Home", path: "/" },
    { page: "About", path: "/about" },
  ];

  return (
    <nav>
      <div>
        <h1>Rani Hinnawi</h1>
      </div>

      <div className="nav-links">
        {navItems.map(({ page, path }) => {
          return (
            <div className="nav-item" key={page}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {page}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

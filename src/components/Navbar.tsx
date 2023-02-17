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
      <h1>Rani Hinnawi</h1>

      <ul className="nav-links">
        {navItems.map(({ page, path }) => {
          return (
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              key={page}
            >
              <li className="nav-item">{page}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

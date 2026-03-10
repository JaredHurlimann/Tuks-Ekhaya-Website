import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ekhaya-logo.svg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/life-at-ekhaya", label: "Life at Ekhaya" },
  { to: "/events", label: "Events" }
];

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Tuks Ekhaya logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">Tuks Ekhaya</span>
            <span className="navbar__brand-subtitle">Men&apos;s Residence</span>
          </div>
        </Link>
        <nav className="navbar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};


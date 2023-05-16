import { NavLink } from "react-router-dom";

const justHover = "px-2 hover:underline";
const activeLink = "px-2 bg-primary-1 text-highlight-1 rounded-lg";

function Nav() {
  return (
    <nav className="text-md hidden items-center space-x-2 font-sans font-bold text-highlight-2 md:flex">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? activeLink : justHover)}
      >
        Home
      </NavLink>
      <a href="#about" className={justHover}>
        About
      </a>
      <a href="#menu" className={justHover}>
        Menu
      </a>
      <NavLink
        to="/reservation"
        end
        className={({ isActive }) => (isActive ? activeLink : justHover)}
      >
        Reservations
      </NavLink>
      <NavLink
        to="/order-online"
        end
        className={({ isActive }) => (isActive ? activeLink : justHover)}
      >
        Order Online
      </NavLink>
      <NavLink
        to="/login"
        end
        className={({ isActive }) => (isActive ? activeLink : justHover)}
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Nav;

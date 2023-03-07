import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-container">
        <div class="logo">
          <h2>BricAppBrac</h2>

          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Coin Appli
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/homedev"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Coin Dev
              </NavLink>
            </li>
          </ul>
          <div className="nav-buttons">
            <button>Inscription gratuite</button>
            <button>Espace perso</button>
            <button>Déconnexion</button>
            <span>en préparation</span>
          </div>
          <h3>Des applications pour se simplifier la vie</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

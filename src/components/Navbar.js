import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-items">
            <div className="logo">
              <NavLink to="/" className="nav-brand shadow-sm">
                FOOD WEB
              </NavLink>
            </div>

            <div className="nav-links">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active-link"
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    exact
                    activeClassName="active-link"
                    className="nav-link me-1"
                    to="/SignUp"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

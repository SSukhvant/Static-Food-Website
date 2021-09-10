import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-items">
            <div className="logo">
              <a href="#" className="nav-brand">
                WEB
              </a>
            </div>

            <div className="nav-links">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink exact activeClassName="active-link" className="nav-link float-right" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink exact activeClassName="active-link" className="nav-link float-left" to="/SignUp">
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

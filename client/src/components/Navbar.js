import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="wrapper flex split-pair align-center">
        <Icon
          icon="game-icons:hamburger-menu"
          className="hamburger mob-hamburger"
        />
        <div className="logo h2">Story</div>
        <div className="flex split-pair align-center gap-2 mob-nav-link">
          <NavLink to="/" className="pointer text-link font-sm">
            Home
          </NavLink>
          <NavLink to="/profile/:id" className="pointer text-link font-sm">
            Raju Lama
          </NavLink>
          <button className="learn-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

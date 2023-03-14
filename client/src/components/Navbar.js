import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/userReducer";

const Navbar = ({ open, handleOpen, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAuth = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="shadow nav">
      <div className="wrapper flex split-pair align-center">
        {!open ? (
          <>
            <Icon
              icon="game-icons:hamburger-menu"
              className="hamburger mob-hamburger"
              onClick={handleOpen}
            />
          </>
        ) : (
          <>
            <Icon icon="akar-icons:cross" onClick={handleClose} />
          </>
        )}

        <div className="logo h2 pointer" onClick={() => navigate("/")}>
          Story
        </div>
        <div className="flex split-pair align-center gap-2 mob-nav-link">
          {userAuth.user.username ? (
            <>
              <NavLink to="/" className="pointer text-link font-sm">
                Home
              </NavLink>
              <NavLink to="/profile/:id" className="pointer text-link font-sm">
                {userAuth.user.username}
              </NavLink>
              <button className="learn-btn" onClick={logoutHandler}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/" className="pointer text-link font-sm">
                Home
              </NavLink>
              <NavLink to="/register" className="pointer text-link font-sm">
                Register
              </NavLink>
              <NavLink to="/login" className="pointer text-link font-sm">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

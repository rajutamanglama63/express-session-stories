import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../reducers/userReducer";

const Register = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };
  return (
    <div className="wrapper flex block-view region-sm">
      <div className="container-md container-tn">
        <div className="flex block-view region-sm">
          <h4 className="h6">Story Application</h4>
          <p className="one-font-size">Please registered yourself.</p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter username"
            value={userData.username}
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
            }}
            type="text"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter email"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
            type="text"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            type="text"
          />
          <button type="submit" className="secondary-button region-margin-tn">
            Register
          </button>
          <p className="region-margin-tn">
            Aready registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

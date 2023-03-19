import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../reducers/userReducer";
import uitility from "../utils/func";

const Login = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const clear = () => {
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials.email, credentials.password));
    clear();
  };
  return (
    <div className="wrapper flex block-view region-sm">
      <div className="container-md container-tn">
        <div className="flex block-view region-sm">
          <h4 className="h6">Story Application</h4>
          <p className="one-font-size">Login to proceed further.</p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter email"
            name="email"
            value={credentials.email}
            type="text"
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter password"
            name="password"
            value={credentials.password}
            type="text"
            onChange={handleInput}
          />
          <button type="submit" className="secondary-button region-margin-tn">
            Login
          </button>
          <p className="region-margin-tn">
            Not registered yet? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

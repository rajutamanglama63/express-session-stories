import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper flex block-view region-sm">
      <div className="container-md container-tn">
        <div className="flex block-view region-sm">
          <h4 className="h6">Story Application</h4>
          <p className="one-font-size">Login to proceed further.</p>
        </div>
        <form>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter email"
            type="text"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="enter password"
            type="text"
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

import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="wrapper flex split-pair align-center">
        <div className="logo h2">Story</div>
        <div className="flex split-pair align-center">
          <p>Register</p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

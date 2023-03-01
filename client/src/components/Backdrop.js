import React from "react";

const Backdrop = ({ open, handleClose }) => {
  return open && <div className="backdrop" onClick={handleClose}></div>;
};

export default Backdrop;

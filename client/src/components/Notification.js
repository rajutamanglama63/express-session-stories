import React from "react";

const Notification = ({ msg }) => {
  if (msg === null) {
    return null;
  } else {
    return (
      <div
        style={{
          padding: "5px",
          borderRadious: "5px",
          marginTop: "4rem",
          marginLeft: "4rem",
          background: "#66ffb3",
          width: "50%",
        }}
      >
        <p>{msg}</p>
      </div>
    );
  }
};

export default Notification;

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Drawer = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const sideDrawerClass = ["side_drawer"];

  if (open) {
    sideDrawerClass.push("show");
  }

  const homeNavigater = () => {
    navigate("/");
    handleClose();
  };

  const profileNavigater = () => {
    navigate("/profile/:id");
    handleClose();
  };

  const createNavigator = () => {
    navigate("/create");
    handleClose();
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="drawer_list">
        <li className="drawer_list_item" onClick={homeNavigater}>
          <Icon icon="material-symbols:home" />
          <span className="drawer_list_item_name">Home</span>
        </li>
        <li className="drawer_list_item" onClick={profileNavigater}>
          <Icon icon="carbon:user-avatar-filled" />
          <span className="drawer_list_item_name">Raju Lama</span>
        </li>
        <li className="drawer_list_item" onClick={createNavigator}>
          <Icon icon="material-symbols:add-circle" />
          <span className="drawer_list_item_name">Create</span>
        </li>
        <li className="drawer_list_item">
          <Icon icon="ri:logout-circle-r-fill" />
          <span className="drawer_list_item_name">Logout</span>
        </li>
        <li className="drawer_list_item" onClick={handleClose}>
          <Icon
            icon="material-symbols:cancel"
            style={{ color: "red" }}
            className="drawer_list"
          />
          <span className="drawer_list_item_name">Cancel</span>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;

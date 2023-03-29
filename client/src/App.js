import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import utilityFunc from "./utils/func";
import Backdrop from "./components/Backdrop";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import { allStories } from "./reducers/storyReducer";
import Router from "./Router";
import { getAllUser } from "./reducers/allUserReducer";

function App() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const userAuth = useSelector((state) => state.auth);
  const stories = useSelector((state) => state.story);
  const storyControl = useSelector((state) => state.storyControl);

  useEffect(() => {
    if (userAuth.user.id) {
      setReload(true);
    }
  }, [userAuth.user.id]);

  const user = utilityFunc.getUser();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user !== null || stories.length !== 0 || storyControl.msg !== "") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }

    if (storyControl.msg === "Successfully updated.") {
      toast.success("Successfully updated.");
    } else if (storyControl.msg === "Successfully deleted.") {
      toast.success("Successfully deleted.");
    }

    dispatch(allStories());
    dispatch(getAllUser());
  }, [dispatch, user, storyControl.msg, stories.length]);
  return (
    <div>
      {isAuth ? (
        <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      ) : null}
      <Drawer open={open} handleClose={handleClose} />
      <Backdrop open={open} handleClose={handleClose} />

      <Router />
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </div>
  );
}

export default App;

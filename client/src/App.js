import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";

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
  const storyControl = useSelector((state) => state.storyControl);

  useEffect(() => {
    if (userAuth.user.id) {
      setReload(true);
    }
  }, [setReload]);

  const user = utilityFunc.getUser();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user !== null || storyControl.msg !== "") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }

    dispatch(allStories());
    dispatch(getAllUser());
  }, [dispatch, user, storyControl.msg]);
  return (
    <div>
      {isAuth ? (
        <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      ) : null}
      <Drawer open={open} handleClose={handleClose} />
      <Backdrop open={open} handleClose={handleClose} />

      <Router />
      {/* <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} /> */}
    </div>
  );
}

export default App;

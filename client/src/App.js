import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import utilityFunc from "./utils/func";
import Backdrop from "./components/Backdrop";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import { allStories } from "./reducers/storyReducer";
import Router from "./Router";
import { Cookies } from "react-cookie";

function App() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const cookie = utilityFunc.getCookie();
  console.log("cookie: ", cookies.get("connect.sid"));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userAuth.user.username) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }

    dispatch(allStories());
  }, [userAuth.user.username, dispatch]);
  return (
    <div>
      {isAuth ? (
        <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      ) : null}
      <Drawer open={open} handleClose={handleClose} />
      <Backdrop open={open} handleClose={handleClose} />

      <Router />
    </div>
  );
}

export default App;

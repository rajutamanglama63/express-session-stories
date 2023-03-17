import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import utilityFunc from "./utils/func";
import Backdrop from "./components/Backdrop";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import { allStories } from "./reducers/storyReducer";
import Router from "./Router";

function App() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const user = utilityFunc.getUser();
  console.log("user: ", user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }

    dispatch(allStories());
  }, [user, dispatch]);
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

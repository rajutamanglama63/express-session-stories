import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    if (user !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }

    dispatch(allStories());
    dispatch(getAllUser());
  }, [dispatch, user]);
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

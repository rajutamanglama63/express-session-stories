import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "./components/Backdrop";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import Router from "./Router";

function App() {
  const userAuth = useSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState(false);
  const [open, setOpen] = useState(false);

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
  }, [userAuth.user.username]);
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

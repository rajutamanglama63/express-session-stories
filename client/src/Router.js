import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Single from "./pages/Single";
import utilityFunc from "./utils/func";

const Router = () => {
  const userAuth = useSelector((state) => state.auth);
  const user = utilityFunc.getUser();
  const [isAuth, setIsAuth] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (userAuth.user.id) {
      setReload(true);
    }
  }, [userAuth.user.id]);

  useEffect(() => {
    if (user !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);
  return (
    <Routes>
      <Route path="/">
        <Route index element={isAuth ? <Home /> : <Login />} />
        <Route path="/profile/:id" element={isAuth ? <Profile /> : <Login />} />
        <Route path="/single/:id" element={isAuth ? <Single /> : <Login />} />
        <Route path="/create" element={isAuth ? <Create /> : <Login />} />
        <Route path="/edit/:storyid" element={isAuth ? <Edit /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;

import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;

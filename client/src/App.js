import { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div>
      {isAuth ? <Navbar /> : null}

      <Router />
    </div>
  );
}

export default App;

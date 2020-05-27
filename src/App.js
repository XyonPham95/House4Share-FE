import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Landing from "./views/Landing";
import "./App.css";
import NoMore from "./components/NoMore";
import AuthRoute from "./components/AuthRoute";
import Login from "./views/Login";
import Footer from "./views/Footer";
import SignUp from "./views/SignUp";
import Footer2 from "./views/Footer2";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const urlToken = window.location.href.split("?token=")[1]
      ? window.location.href.split("?token=")[1].replace("#_=_", "")
      : null;
    const localToken = localStorage.getItem("token");
    const token = localToken || urlToken;

    if (!token) return;
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me", {
      headers: { authorization: `Bearer ${token}` },
    });
    const body = await res.json();
    if (body.status === "success") {
      setUser(body.data);
      localStorage.setItem("token", token);
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  }
  console.log(user);
  return (
    <div>
      <Home user={user} setUser={setUser} />
      <Switch>
        <Route path="/" user={user} exact component={Landing} />
        <NoMore
          path="/login"
          user={user}
          setUser={setUser}
          exact
          component={Login}
        />
        <Route path="/register" exact component={SignUp} />
      </Switch>
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;

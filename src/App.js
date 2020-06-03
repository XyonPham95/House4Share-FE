import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Landing from "./views/Landing";
import "./App.css";
import NoMore from "./components/NoMore";
import AuthRoute from "./components/AuthRoute";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Profile from "./views/Profile";
import PostProduct from "./views/PostProduct";
import ProductPage from "./views/ProductPage";
import SingleProduct from "./views/SingleProduct";

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
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/profile", {
      headers: { authorization: `Bearer ${token}` },
    });
    const body = await res.json();
    if (body.status === "success") {
      setUser(body.data);
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }

  return (
    <div>
      <Home user={user} setUser={setUser} />
      <Switch>
        <Route path="/" user={user} exact component={Landing} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/product/:pId" exact component={SingleProduct} />
      
        <AuthRoute
          path="/user/profile"
          setUser={setUser}
          user={user}
          exact
          component={Profile}
        />
        <AuthRoute
          path="/user/createhouse"
          setUser={setUser}
          user={user}
          exact
          component={PostProduct}
        />
        <NoMore
          path="/login"
          user={user}
          setUser={setUser}
          exact
          component={Login}
        />
        <Route path="/register" exact component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;

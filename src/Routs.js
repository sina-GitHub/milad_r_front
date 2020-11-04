import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import User from "./pages/User";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound404 from "./components/NotFound404";

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/admin/users' component={Users} />
      <Route exact path='/admin/users/:user' component={User} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound404} />
    </Switch>
  );
}

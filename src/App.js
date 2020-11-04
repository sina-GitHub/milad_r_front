import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routs";
import Navbar from "./components/Navbar/Navbar";
import UserSearchStore from "./data store/UserSearchStore";

export default function App() {
  return (
    <UserSearchStore>
      <div className='web-app ltr'>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </div>
    </UserSearchStore>
  );
}

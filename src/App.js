import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Profile from './components/Profile';
import Callback from "./callback";
import auth0 from "auth0-js";
import { FaGoogle } from "react-icons/fa";

const auth0Client = new auth0.WebAuth({
  domain: "dev-ig48lpxq4tpdbq75.us.auth0.com",
  clientID: "UgBRxI4mGs0zg5xmrKlbZ86P8kThjCCI",
  redirectUri: "http://localhost:3000/callback",
  audience: "https://dev-ig48lpxq4tpdbq75.us.auth0.com/userinfo",
  responseType: "token id_token",
  scope: "openid profile email",
});

function App() {
  const storage = window.localStorage.getItem("access_token");

  const login = () => {
    auth0Client.authorize();
  };

  const logout = () => {
    // Clear tokens from local storage or cookies
    localStorage.clear();
    window.location.href = "/";
    console.log("logout");
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {storage ? (
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            ) : (
              <li>
                <button onClick={login}>
                  <span>
                    <FaGoogle />
                  </span>
                  <span>Log In With Google</span>
                </button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

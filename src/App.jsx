import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState("login");

  return (
    <section className="forms-section">
      <h1 className="section-title">Login & Signup Forms</h1>
      <div className="forms">
        {/* Login Form */}
        <div
          className={`form-wrapper ${isActive === "login" ? "is-active" : ""}`}
        >
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => setIsActive("login")}
          >
            Login
            <span className="underline"></span>
          </button>
          <Login />
        </div>

        {/* Signup Form */}
        <div
          className={`form-wrapper ${isActive === "signup" ? "is-active" : ""}`}
        >
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => setIsActive("signup")}
          >
            Sign Up
            <span className="underline"></span>
          </button>
          <Signup />
        </div>
      </div>
    </section>
  );
};

export default App;

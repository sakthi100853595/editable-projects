import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

const App = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleForm = () => {
    setIsLoginActive((prev) => !prev);
  };

  return (
    <section className="forms-section">
      <h1 className="section-title">Login & Sign up Forms</h1>
      <div className="forms">
        {/* Login Form */}
        <div className={`form-wrapper ${isLoginActive ? "is-active" : ""}`}>
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => setIsLoginActive(true)}
          >
            Login
            <span className="underline"></span>
          </button>
          <Login />
        </div>

        {/* Signup Form */}
        <div className={`form-wrapper ${!isLoginActive ? "is-active" : ""}`}>
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => setIsLoginActive(false)}
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

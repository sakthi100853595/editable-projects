import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <form className="form form-signup">
      <fieldset>
        <legend>
          Please, enter your email, password, and password confirmation for sign
          up.
        </legend>
        <div className="input-block">
          <label htmlFor="signup-username">Username</label>
          <input id="signup-username" type="text" required />
        </div>
        <div className="input-block">
          <label htmlFor="signup-email">E-mail</label>
          <input id="signup-email" type="email" required />
        </div>
        <div className="input-block">
          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" required />
        </div>
      </fieldset>
      <button type="submit" className="btn-signup">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;

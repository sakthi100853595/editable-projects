import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ handleAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // ✅ Remove user data
    handleAuth(false); // ✅ Update App state
    navigate("/login"); // ✅ Redirect to Login
  };

  return (
    <div className="form-wrapper is-active">
      <h2>Welcome to Home</h2>
      <p>You are logged in!</p>
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
    </div>
  );
};

export default Home;

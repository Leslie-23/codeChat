import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/base.css";
import "../css/LoginSignup.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // my login logic will come her in line with the backend
    console.log("Username:", username);
    console.log("Password:", password);
    // Navigate to the home page after successful login
    navigate("/home");
  };

  return (
    <div className="login-page-container">
      <h2 className="login-h2">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-page-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

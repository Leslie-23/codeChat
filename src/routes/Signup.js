import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/base.css";

import "../css/LoginSignup.css"; // same css for the loginn and signup page.

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    // Add your signup logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // Navigate to the home page after successful signup
    navigate("/home");
  };

  return (
    <div className="login-page-container">
      <h2 className="login-h2">Signup</h2>
      <form onSubmit={handleSignup}>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

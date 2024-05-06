import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./../style/signup-login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // login関数をuseAuthから取得
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password }
      );
      login(response.data.token); // 認証状態を更新
      navigate("/home");
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed!");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>LoginForm</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>Email</label>
            <input
              type="text"
              placeholder="e-mail"
              name="mailAddress"
              className="mailAddress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formField">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submitButton">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

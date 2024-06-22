import "./../style/signup-login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        { email, password }
      );
      signup(response.data.token); // 認証状態を更新
      navigate("/home");
    } catch (error) {
      console.error("SignUp error", error);
      alert("SignUp failed!");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>SignUp Form</h1>
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
          <button className="submitButton">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

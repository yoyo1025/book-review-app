import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../style/signup-login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          email: email,
          password: password,
        }
      );

      // JWTトークンを保存する例（通常はlocalStorageやセッションに保存）
      localStorage.setItem("token", response.data.token);

      // 認証成功後に/homeに遷移
      navigate("/home");
    } catch (error) {
      console.error("Login error", error);
      // エラー処理（アラート表示やメッセージ表示など）
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

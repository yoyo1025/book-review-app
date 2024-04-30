import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./style/App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header_inner">
          <h1 className="title-logo">BookView</h1>
          <nav className="gnav">
            <ul className="gnav-list">
              <ui>
                <a href="">特徴</a>
              </ui>
              <ui>
                <a href="">料金</a>
              </ui>
              <ui>
                <a href="">お問い合わせ</a>
              </ui>
              <ui>
                <Link to="/login">login</Link>
              </ui>
              <ui>
                <Link to="/signup">signup</Link>
              </ui>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;

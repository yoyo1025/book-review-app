import React from "react";
import "./style/App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header_inner">
          <h1 className="title-logo">LOGO</h1>
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
                <a href="">ログイン/サインイン</a>
              </ui>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App;

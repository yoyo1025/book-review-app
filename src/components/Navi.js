import { Link } from "react-router-dom";
import "../style/App.css";

export const Navi = () => {
  return (
    <header className="header">
      <div className="header_inner">
        <h1 className="title-logo">BookViews</h1>
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
    </header>
  );
};

export default Navi;

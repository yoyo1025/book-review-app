import "../style/App.css";
import { Link } from "react-router-dom";

export const Header = ({ username, searchQuery, onSearchChange }) => {
  return (
    <>
      <header className="home-header">
        {username && <div className="login-user">{username}</div>}
        <input
          type="text"
          className="search-box"
          placeholder="書名で検索する"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <Link to={`/create`}>
          <button className="create-review">投稿する</button>
        </Link>
      </header>
    </>
  );
};

export default Header;

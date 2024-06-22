import "../style/App.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="home-header">
        <input
          type="text"
          className="search-box"
          placeholder="書名で検索する"
        />
        <Link to={`/create`}>
          <button className="create-review">投稿する</button>
        </Link>
    </header>
  );
};

export default Header;

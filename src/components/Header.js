import "../style/App.css";

export const Header = () => {
  return (
    <header className="home-header">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="書名で検索する"
        />
        <button className="create-review">投稿する</button>
      </div>
    </header>
  );
};

export default Header;

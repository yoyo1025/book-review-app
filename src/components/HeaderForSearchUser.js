import "../style/App.css";

export const HeaderForSearchUser = ({ searchQuery, onSearchChange }) => {
  return (
    <>
      <header className="home-header2">
        {/* {username && <div className="login-user">{username}</div>} */}
        <input
          type="text"
          className="search-box2"
          placeholder="書名で検索する"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </header>
    </>
  );
};

export default HeaderForSearchUser;

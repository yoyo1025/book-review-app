import "./../style/signup-login.css";

function Signup() {
  return (
    <div className="formContainer">
      <form>
        <h1>サインアップフォーム</h1>
        <hr />
        <div className="uiForm">
          {/* <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username" />
          </div> */}
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
            />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password" />
          </div>
          <button className="submitButton">サインアップ</button>
        </div>
      </form>
    </div>
  );
}

export default App;

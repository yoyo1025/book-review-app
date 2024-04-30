import "./../style/signup-login.css";

export const Login = () => {
  return (
    <div className="formContainer">
      <form>
        <h1>LoginForm</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>Email</label>
            <input type="text" placeholder="e-mail" name="mailAddress" />
          </div>
          <div className="formField">
            <label>Password</label>
            <input type="text" placeholder="password" name="password" />
          </div>
          <button className="submitButton">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

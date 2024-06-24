import Navi from "./Navi";
import code from "./../images/code.jpg"
import robot from "./../images/robot.jpg"
import "../style/App.css";



export const Top = () => {
  return (
    <>
      <Navi />
      <div className="top-elements">
      <form>
        <input type="text" className="search-user" placeholder="ユーザー名を検索しよう"/>
        <button className="search-user-botton">検索</button>
      </form>
      <div className="top-pictures">
        <img src={code} className="image-code"/>
        <img src={robot} className="image-robot"/>
      </div>
      </div>
    </>
);
};

export default Top;

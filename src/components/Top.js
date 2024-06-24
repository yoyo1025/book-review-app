import Navi from "./Navi";
import code from "./../images/code.jpg"
import robot from "./../images/robot.jpg"
import "../style/App.css";
import { useState, useEffect } from "react";
import axios from "axios";



export const Top = () => {
  const [userName, setUserName] = useState("");
  const [targetUser, setTargetUser] = useState(null);

  const handleSearchUserName = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/name/${userName}`);
      if (response.data && response.data.username) { // 応答にユーザー名が含まれているか確認
        setTargetUser(response.data);
      } else {
        setTargetUser(null);
      }
    }catch(error) {
      console.error("Error fetching user:", error);
      setTargetUser(null);
    }
  };

  useEffect(() => {
    if (targetUser) {
      console.log(targetUser);
    }
  }, [targetUser]);

  return (
    <>
      <Navi />
      <div className="top-elements">
        <form onSubmit={handleSearchUserName}>
          <input 
            type="text" 
            className="search-user" 
            placeholder="ユーザー名を検索しよう"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="search-user-botton">検索</button>
        </form>
        {targetUser && (
          <div className="username">
            {targetUser.username}
          </div>
        )}
        <div className="top-pictures">
          <img src={code} className="image-code"/>
          <img src={robot} className="image-robot"/>
        </div>
      </div>
    </>
);
};

export default Top;

import Navi from "./Navi";
import code from "./../images/code.jpg"
import robot from "./../images/robot.jpg"


export const Top = () => {
  return (
    <>
      <Navi />
      <div className="top-pictures">
        <img src={code} className="image-code"/>
        <img src={robot} className="image-robot"/>
      </div>
    </>
);
};

export default Top;

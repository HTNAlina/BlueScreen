import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/admin-home");
  }, [navigate]);

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in-div">
      <div className="nume-div2">
        <div className="nume-div3">Nume</div>
      </div>
    
      <div className="autentificare-div">AUTENTIFICARE</div>

      <input id="cod" type="text" className="cod-acces-div"></input>
      <input id="nume" type="text" className="rectangle-select"></input>
      <button id="butonautentificare"className="autentificare-div1" onClick={onHouse1ImageClick} >Autentificare</button>
      
      <img className="imagine-icon1" alt="" src="../imagine1@2x.png" />
      <img
        className="house-1-icon9"
        alt=""
        src="../house-19@2x.png"
        onClick={onHouse1ImageClick}
      />
    </div>
  );
};

export default LogIn;

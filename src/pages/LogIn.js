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
      <img className="cod-acces-icon" alt="" src="../cod-acces.svg" />
      <img
        className="rectangle-icon55"
        alt=""
        src="../rectangle-55.svg"
        onClick={onRectangleClick}
      />
      <div className="autentificare-div">AUTENTIFICARE</div>
      <select className="rectangle-select" />
      <div className="cod-acces-div">Cod acces</div>
      <div className="autentificare-div1">Autentificare</div>
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

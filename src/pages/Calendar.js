import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const Calendar = () => {
  const navigate = useNavigate();

  const onMeciAnteriorContainerClick = useCallback(() => {
    navigate("/last-match");
  }, [navigate]);

  const onMeciUrmatorContainerClick = useCallback(() => {
    navigate("/next-match");
  }, [navigate]);

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="calendar-div4">
      <div className="meci-anterior-div" onClick={onMeciAnteriorContainerClick}>
        <img className="line-icon15" alt="" src="../line-19.svg" />
        <div className="meci-anterior-div1">MECI ANTERIOR</div>
      </div>
      <div className="meci-urmator-div2" onClick={onMeciUrmatorContainerClick}>
        <img className="line-icon16" alt="" src="../line-26.svg" />
        <div className="meci-urmtor-div">MECI URMĂTOR</div>
      </div>
      <img
        className="live-streaming-1-icon"
        alt=""
        src="../livestreaming-1@2x.png"
      />
      <div className="logo-1-div" />
      <div className="csm-u-craiova3">
        <div className="csm-u-craiova4">CSM U CRAIOVA</div>
        <img className="background-icon2" alt="" src="../background2@2x.png" />
      </div>
      <div className="csm-suceava-div10">
        <img className="logo-csm-16" alt="" src="../logo-csm-16@2x.png" />
        <div className="csm-suceava-div11">CSM SUCEAVA</div>
      </div>
      <b className="vs-b">VS</b>
      <div className="div11">2</div>
      <div className="div12">2</div>
      <div className="div13">03:01</div>
      <img className="live-1-icon" alt="" src="../live-1@2x.png" />
      <img
        className="house-1-icon7"
        alt=""
        src="../house-17@2x.png"
        onClick={onHouse1ImageClick}
      />
    </div>
  );
};

export default Calendar;

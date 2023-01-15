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

  const onHouseImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onButonAccountClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButonNoutatiClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onButonLotClick = useCallback(() => {
    navigate("/lot");
  }, [navigate]);

  const onButonClasamentClick = useCallback(() => {
    window.open("https://competitii.frvolei.eu/a1-masculin-sezon-2021-2022/");
  }, []);

  const onButonCalendarClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onButonDetaliiClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onButonJuvenilClick = useCallback(() => {
    navigate("/volei-juvenil");
  }, [navigate]); 
  const onButonClasamentButtonClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=VlFYKVk5o8U&ab_channel=TeleviziuneaIntermedia");
  }, []);
  return (
    <div className="calendar-div4">
       <div className="logo-div" onClick={onHouseImageClick}>
        <img className="logo-csm-1" alt="" src="../logo-csm-1@2x.png" />
        <div className="volei-csm-suceava">
          <p className="volei-csm-p">VOLEI C.S.M</p>
          <p className="suceava-p">SUCEAVA</p>
        </div>
      </div>
      <div className="buton-account-div" onClick={onButonAccountClick}>
        <div className="rectangle-a" />
        <img className="account-1-a" alt="" src="../account-1@2x.png" />
      </div>
      <div className="nouati" onClick={onButonNoutatiClick}>
        <img className="rectangle-n" alt="" src="../rectangle-1.svg" />
        <div className="nouti-n">NOUTĂȚI</div>
      </div>
      <div className="lot" onClick={onButonLotClick}>
        <div className="lot-l">LOT</div>
        <img className="rectangle-l" alt="" src="../rectangle-5.svg" />
      </div>
      <div
        className="buton-clasament-button"
        onClick={onButonClasamentClick}
      >
        <div className="clasament-c">CLASAMENT</div>
        <img className="rectangle-c" alt="" src="../rectangle-4.svg" />
      </div>
      <div
        className="buton-calendar-div"
        onClick={onButonCalendarClick}
      >
        <div className="calendar-c">CALENDAR</div>
        <img className="rectangle-ca" alt="" src="../rectangle-3.svg" />
      </div>
      <div className="buton-detalii-div" onClick={onButonDetaliiClick}>
        <div className="detalii-d">DETALII</div>
        <img className="rectangle-d" alt="" src="../rectangle-2.svg" />
      </div>
      <div className="buton-volei-juvenil" onClick={onButonJuvenilClick}>
        <img className="rectangle-v" alt="" src="../rectangle-31.svg" />
        <div className="volei-juvenil-v">VOLEI JUVENIL</div>
      </div>
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
      <img 
        className="live-1-icon" 
        alt="" src="../live-1@2x.png" 
        onClick={onButonClasamentButtonClick}  
      />
    </div>
  );
};

export default Calendar;

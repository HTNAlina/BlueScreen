import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NextMatch.css";

const NextMatch = () => {
  const navigate = useNavigate();

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
  return (
    <div className="next-match-div">
      <div className="meci-urmator-div1">
        <img className="line-icon14" alt="" src="../line-25.svg" />
        <div className="meciuri-urmtoare-div"> MECIURI URMĂTOARE</div>
      </div>
      <div className="logo-div" onClick={onHouseImageClick}>
        <img className="logo-csm-1" alt="" src="../logo-csm-1@2x.png" />
        <div className="volei-csm-suceava">
          <p className="volei-csm-p">VOLEI C.S.M</p>
          <p className="suceava-p">SUCEAVA</p>
        </div>
      </div>
      +      <div className="buton-account-div" onClick={onButonAccountClick}>
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
      
      <div className="div7">22.10 18:00</div>
      <div className="div8">15.10 10:00</div>
      <div className="csm-craiova-div">
        <img className="background-icon1" alt="" src="../background1@2x.png" />
        <div className="csm-u-craiova2">CSM U CRAIOVA</div>
      </div>
      <div className="csm-suceava-div6">
        <img className="logo-csm-14" alt="" src="../logo-csm-14@2x.png" />
        <div className="csm-suceava-div7">CSM SUCEAVA</div>
      </div>
      <div className="csm-suceava-div8">
        <img className="logo-csm-14" alt="" src="../logo-csm-14@2x.png" />
        <div className="csm-suceava-div9">CSM SUCEAVA</div>
      </div>
      <div className="divizia-a12">DIVIZIA A1</div>
      <div className="divizia-a13">DIVIZIA A1</div>
      <div className="sala-polivalent-craiova1">Sala Polivalentă Craiova</div>
      <div className="u-cluj-div2">
        <img
          className="d26lfm-r94wk7cd-1-icon1"
          alt=""
          src="../04d26lfmr94wk7cd-11@2x.png"
        />
        <div className="u-cluj-div3">U. Cluj</div>
      </div>
      <div className="sala-de-sport-dumitru-bernic1">
        Sala de sport ,,Dumitru Bernicu’’
      </div>
      
      <div className="div9">-</div>
      <div className="div10">-</div>
     
    </div>
  );
};

export default NextMatch;

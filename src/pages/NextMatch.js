import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NextMatch.css";

const NextMatch = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="next-match-div">
      <div className="meci-urmator-div1">
        <img className="line-icon14" alt="" src="../line-25.svg" />
        <div className="meciuri-urmtoare-div"> MECIURI URMĂTOARE</div>
      </div>
      <div className="calendar-div3">
        <div className="buton-dreata-div1">
          <div className="rectangle-div4" />
          <img
            className="next-arrow-3-icon1"
            alt=""
            src="../nextarrow-31@2x.png"
          />
        </div>
        <div className="buton-stanga-div1">
          <div className="rectangle-div5" />
          <img
            className="next-arrow-4-icon1"
            alt=""
            src="../nextarrow-41@2x.png"
          />
        </div>
        <div className="buton-calendar-div3">
          <div className="rectangle-div6" />
          <img
            className="calendar-1-icon1"
            alt=""
            src="../calendar-11@2x.png"
          />
        </div>
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
      <img className="meci-icon1" alt="" src="../meci1@2x.png" />
      <div className="div9">-</div>
      <div className="div10">-</div>
      <img
        className="house-1-icon6"
        alt=""
        src="../house-16@2x.png"
        onClick={onHouse1ImageClick}
      />
    </div>
  );
};

export default NextMatch;

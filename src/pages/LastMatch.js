import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LastMatch.css";

const LastMatch = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="last-match-div">
      <div className="meci-urmator-div">
        <img className="line-icon13" alt="" src="../line-24.svg" />
        <div className="meciuri-anterioare-div"> MECIURI ANTERIOARE</div>
      </div>
      <div className="calendar-div2">
        <div className="buton-dreata-div">
          <div className="rectangle-div1" />
          <img
            className="next-arrow-3-icon"
            alt=""
            src="../nextarrow-3@2x.png"
          />
        </div>
        <div className="buton-stanga-div">
          <div className="rectangle-div2" />
          <img
            className="next-arrow-4-icon"
            alt=""
            src="../nextarrow-4@2x.png"
          />
        </div>
        <div className="buton-calendar-div2">
          <div className="rectangle-div3" />
          <img className="calendar-1-icon" alt="" src="../calendar-1@2x.png" />
        </div>
      </div>
      <div className="div1">22.10 18:00</div>
      <div className="div2">15.10 10:00</div>
      <div className="csm-u-craiova">
        <img className="background-icon" alt="" src="../background@2x.png" />
        <div className="csm-u-craiova1">CSM U CRAIOVA</div>
      </div>
      <div className="csm-suceava-div">
        <div className="csm-suceava-div1">
          <img className="logo-csm-12" alt="" src="../logo-csm-12@2x.png" />
          <div className="csm-suceava-div2">CSM SUCEAVA</div>
        </div>
      </div>
      <div className="csm-suceava-div3">
        <div className="csm-suceava-div1">
          <img className="logo-csm-12" alt="" src="../logo-csm-12@2x.png" />
          <div className="csm-suceava-div2">CSM SUCEAVA</div>
        </div>
      </div>
      <div className="divizia-a1">DIVIZIA A1</div>
      <div className="divizia-a11">DIVIZIA A1</div>
      <div className="sala-polivalent-craiova">Sala Polivalentă Craiova</div>
      <div className="u-cluj-div">
        <img
          className="d26lfm-r94wk7cd-1-icon"
          alt=""
          src="../04d26lfmr94wk7cd-1@2x.png"
        />
        <div className="u-cluj-div1">U. Cluj</div>
      </div>
      <div className="sala-de-sport-dumitru-bernic">
        Sala de sport ,,Dumitru Bernicu’’
      </div>
      <img className="meci-icon" alt="" src="../meci@2x.png" />
      <div className="div3">-</div>
      <div className="div4">-</div>
      <div className="scor-final-div">SCOR FINAL</div>
      <div className="div5">3 - 0</div>
      <div className="div6">3 - 2</div>
      <img
        className="house-1-icon5"
        alt=""
        src="../house-15@2x.png"
        onClick={onHouse1ImageClick}
      />
    </div>
  );
};

export default LastMatch;

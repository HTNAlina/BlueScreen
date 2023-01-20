import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayersHistory.css";

const PlayersHistory = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onContainer1Click = useCallback(() => {
    navigate("/players-history");
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

  return (
    <div className="players-history-div">
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
      <div className="nume-jucator-div">
        <img className="line-icon10" alt="" src="../line-21.svg" />
        <div className="pop-darius-cristian">2 POP Darius Cristian</div>
      </div>
      <div className="div">
        <img className="ellipse-icon7" alt="" src="../ellipse-4.svg" />
        <img
          className="teamplayer-176-2065-1-icon"
          alt=""
          src="../teamplayer-176-2065-1@2x.png"
        />
      </div>
      <div className="numr-tricou-2-club-csm-suce">
        <p className="nlime-183-p">
          <span>Număr tricou:</span>
          <span className="span"> 2</span>
        </p>
        <p className="club-csm-suceava">
          <span className="club-span">Club:</span>
          <span> CSM Suceava</span>
        </p>
        <p className="club-csm-suceava">
          <span className="club-span">Poziție:</span>
          <span> Wing-spiker</span>
        </p>
        <p className="nlime-183-p">
          <span>Înălțime:</span>
          <span className="span"> 1.83</span>
        </p>
        <p className="nlime-183-p">
          <span>Data nașterii:</span>
          <span className="span"> 10.03.2003</span>
        </p>
        <p className="nlime-183-p">
          <span>Naționalitate:</span>
          <span className="span"> ROMÂNĂ</span>
        </p>
      </div>
      <div className="echipe-div">
        <img className="line-icon11" alt="" src="../line-22.svg" />
        <div className="echipe-div1">{`ECHIPE `}</div>
      </div>
      <div className="perioada-div">
        <img className="line-icon12" alt="" src="../line-23.svg" />
        <div className="perioad-div">PERIOADĂ</div>
      </div>
      <div className="csm-suceava-cs-unirea-dej">
        <p className="nlime-183-p">CSM Suceava</p>
        <p className="nlime-183-p">&nbsp;</p>
        <p className="cs-unirea-dej">CS Unirea Dej</p>
      </div>
      <div className="frv-202223-frv-202122">
        <p className="nlime-183-p">FRV 2022/23</p>
        <p className="nlime-183-p">&nbsp;</p>
        <p className="cs-unirea-dej">FRV 2021/22</p>
      </div>
    
    </div>
  );
};

export default PlayersHistory;

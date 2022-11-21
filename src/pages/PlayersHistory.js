import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayersHistory.css";

const PlayersHistory = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="players-history-div">
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
      <img
        className="house-1-icon4"
        alt=""
        src="../house-14@2x.png"
        onClick={onHouse1ImageClick}
      />
    </div>
  );
};

export default PlayersHistory;

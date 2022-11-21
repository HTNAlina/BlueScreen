import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./VoleiJuvenil.css";

const VoleiJuvenil = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="volei-juvenil-div2">
      <div className="volei-juvenil-div3">
        <div className="volei-juvenil-suceava">VOLEI JUVENIL SUCEAVA</div>
        <img
          className="volleyball-player-1-icon"
          alt=""
          src="../volleyballplayer-1@2x.png"
        />
      </div>
      <img
        className="house-1-icon1"
        alt=""
        src="../house-11@2x.png"
        onClick={onHouse1ImageClick}
      />
      <div className="buton-juniori-div">
        <div className="juniori-div">JUNIORI</div>
        <img className="rectangle-icon43" alt="" src="../rectangle-37.svg" />
      </div>
      <div className="buton-sperante-div">
        <div className="sperane-div">SPERANȚE</div>
        <img className="rectangle-icon44" alt="" src="../rectangle-38.svg" />
      </div>
      <div className="buton-cadeti-div">
        <div className="cadei-div">CADEȚI</div>
        <img className="rectangle-icon45" alt="" src="../rectangle-39.svg" />
      </div>
      <div className="buton-lot-div2">
        <div className="lot-div2">LOT</div>
        <img className="rectangle-icon46" alt="" src="../rectangle-310.svg" />
      </div>
      <div className="buton-mini-volei-div">
        <div className="mini-volei-div">MINI- VOLEI</div>
        <img className="rectangle-icon47" alt="" src="../rectangle-311.svg" />
      </div>
      <img className="img-icon" alt="" src="../img@2x.png" />
      <b className="nscrie-i-copilul-la-volei-pen">
        <p className="nscrie-i-copilul-la">
          Înscrie-ți copilul la volei pentru o dezvoltarea armonioasă
        </p>
        <p className="blank-line-p">&nbsp;</p>
      </b>
      <div className="nume-parinte-div">
        <img className="rectangle-icon48" alt="" src="../rectangle-14.svg" />
        <div className="nume-printe-div">Nume pãrinte</div>
      </div>
      <div className="nume-copil-div">
        <img className="rectangle-icon48" alt="" src="../rectangle-15.svg" />
        <div className="vrst-copil-div">Nume copil</div>
      </div>
      <div className="varsta-div">
        <img className="rectangle-icon48" alt="" src="../rectangle-16.svg" />
        <div className="vrst-copil-div">Vârstã copil</div>
      </div>
      <div className="numar-telefon-div">
        <img className="rectangle-icon48" alt="" src="../rectangle-17.svg" />
        <div className="vrst-copil-div">Numãr telefon</div>
      </div>
      <img className="imagine-icon" alt="" src="../imagine@2x.png" />
      <div className="e-mail-div">
        <img className="rectangle-icon48" alt="" src="../rectangle-18.svg" />
        <div className="vrst-copil-div">E-mail</div>
      </div>
      <div className="buton-inscrierea-div">
        <img className="rectangle-icon53" alt="" src="../rectangle-54.svg" />
        <div className="trimite-nscrierea-div">Trimite înscrierea</div>
      </div>
    </div>
  );
};

export default VoleiJuvenil;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./VoleiJuvenil.css";

const VoleiJuvenil = () => {
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
    <div className="volei-juvenil-div2">
      <div className="volei-juvenil-div3">
        <div className="volei-juvenil-suceava">VOLEI JUVENIL SUCEAVA</div>
        <img
          className="volleyball-player-1-icon"
          alt=""
          src="../volleyballplayer-1@2x.png"
        />
      </div>
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
        <input type="text2" placeholder="Nume părinte"></input>
       
      </div>
      <div className="nume-copil-div">
      <input type="text2" placeholder="Nume copil"></input>
        
      </div>
      <div className="varsta-div">
        <input type="text2" placeholder="Vârstă copil"></input>
       
      </div>
      <div className="numar-telefon-div">
        <input type="text2" placeholder="Număr telefon"></input>
      </div>
      <div className="e-mail-div">
        <input type="text2" placeholder="E-mail"></input>
      </div>
      <div className="buton-inscrierea-div">
        <img className="rectangle-icon53" alt="" src="../rectangle-54.svg" />
        <div className="trimite-nscrierea-div">Trimite înscrierea</div>
      </div>
    </div>
  );
};

export default VoleiJuvenil;

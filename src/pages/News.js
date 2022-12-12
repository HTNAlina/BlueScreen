import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./News.css";

const News = () => {
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
    <div className="news-div">
      <div className="noutati-div">
        <div className="nouti-div2">NOUTĂȚI</div>
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
      <div className="stire-1-div">
        <img
          className="n-1-icon"
          alt=""
          src="../311857512-591219086123721-2913233083732422777-n-1@2x.png"
        />
        <div className="ncepem-sptmna-aceasta-prin">
          <p className="ncepem-sptmna-aceasta">
            💯 Începem săptămâna aceasta prin a-l felicita pe Alexandru DRAGOMIR
            pentru rezultatele sale excelente în cadrul etapei 2 din Campionatul
            Național de volei al Diviziei A1.
          </p>
          <p className="alexandru-s-a-remarcat">
            🔥 Alexandru s-a remarcat în meciul contra celor de la U Cluj, prin
            coordonarea eficientă a echipei, astfel echipa reușind să îi învingă
            pe oaspeți cu scorul de 3 - 2. Bineînțeles, să nu uităm și colegii
            care au performat exemplar reușind să puncteze fiecare minge plasată
            de Alexandru.
          </p>
        </div>
      </div>
      <div className="stire-2-div">
        <img
          className="n-1-icon1"
          alt=""
          src="../312058798-599410075304622-1649075361836094485-n-1@2x.png"
        />
        <div className="cosmin-ciubotaru-un-juctor-a">{`💯 Cosmin Ciubotaru, un jucător ambițios, care a reușit nu mai puțin de 6 blocaje în fața unei echipe mult superioare și a unor adversari foarte valoroși, cei de la SCMU Craiova. În plus, a reușit două puncte din 5 atacuri și doi ași contra aceleiași echipe puternice cum formează oltenii. Prin toate acestea a dovedit că merită să fie inclus în Echipa Etapei a treia. Și a dovedit că pot face parte din Echipa Etapei și jucători de la echipe care nu se bat la primele locuri. `}</div>
      </div>
      <div className="stire-3-div">
        <img
          className="captura-de-ecran-din-2022-10-"
          alt=""
          src="../captura-de-ecran-din-20221031-la-1115-1@2x.png"
        />
        <div className="afl-cum-au-simit-meciul-de-a">
          🎙️Află cum au simțit meciul de astăzi chiar de la oamenii ce au
          evoluat. Astăzi îl avem alături de noi pe Marius Gontariu, extremă la
          CSM Suceava, antrenorul principal al CSM Suceava, Tudor Orășanu si
          antrenorul celor de la C.S. Unirea DEJ, Ovidiu Tamaș.
        </div>
      </div>
    
      <div className="vezi-toate-stirile">
        <div className="line-div6" />
        <div className="vezi-toate-tirile">{`>>Vezi toate știrile`}</div>
      </div>
    </div>
  );
};

export default News;

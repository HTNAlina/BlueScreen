import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./News.css";

const News = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="news-div">
      <div className="noutati-div">
        <img className="line-icon9" alt="" src="../line-2.svg" />
        <div className="nouti-div2">NOUTĂȚI</div>
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
      <img
        className="house-1-icon3"
        alt=""
        src="../house-13@2x.png"
        onClick={onHouse1ImageClick}
      />
      <a href="https://www.csm-suceava.ro/volei"><div className="vezi-toate-stirile">
        <div className="line-div6" />
        <div className="vezi-toate-tirile">{`>>Vezi toate știrile`}</div>
      </div>
      </a>
    </div>

  );
};

export default News;

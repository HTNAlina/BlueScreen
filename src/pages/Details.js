import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onObtineIndicatiiContainerClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//csm+volei+suceava/@46.035044,24.3410752,7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4734fdd7abfe2775:0xcb0beabce33ca5ab!2m2!1d26.2308!2d47.63397"
    );
  }, []);

  return (
    <div className="details-div">
      <img
        className="house-1-icon2"
        alt=""
        src="../house-12@2x.png"
        onClick={onHouse1ImageClick}
      />
      <div className="adresa-div">
        <img
          className="captura-de-ecran-din-2022-11-"
          alt=""
          src="../captura-de-ecran-din-20221102-la-1259-1@2x.png"
        />
        <div
          className="obtine-indicatii-div"
          onClick={onObtineIndicatiiContainerClick}
        >
          <img className="rectangle-icon54" alt="" src="../rectangle-312.svg" />
          <div className="ob-div">Obține indicații</div>
        </div>
        <div className="adresa-div1">
          <img className="address-1-icon" alt="" src="../address-1@2x.png" />
          <div className="bulevardul-1-decembrie-1918-7">
            Bulevardul 1 Decembrie 1918, 7, Suceava, Suceava, 720237, Suceava
          </div>
        </div>
        <div className="adress-div">
          <img className="line-icon5" alt="" src="../line-15.svg" />
          <div className="adres-div">ADRESÃ</div>
          <img className="address-1-icon1" alt="" src="../address-11@2x.png" />
        </div>
      </div>
      <div className="istorie-div">
        <img className="line-icon6" alt="" src="../line-16.svg" />
        <div className="istorie-div1">ISTORIE</div>
        <img className="hourglass-1-icon" alt="" src="../hourglass-1@2x.png" />
      </div>
      <div className="istorie-2022-div">
        <b className="b">2022</b>
        <b className="campionat-naional-divizia-a1">
          <p className="campionat-naional-divizia">
            Campionat Național Divizia A1 Masculin
          </p>
          <p className="campionat-naional-divizia">&nbsp;</p>
          <p className="suceava-a-reuit">Cupa României 22-23 Masculin</p>
        </b>
        <img
          className="fb-img-1665206657176-copie-1"
          alt=""
          src="../fb-img-1665206657176--copie-1@2x.png"
        />
        <div className="va-fi-un-campionat-lung-i-dif">
          <p className="campionat-naional-divizia">
            ,,Va fi un campionat lung și dificil și fiecare punct va conta în
            economia clasamentului. Aștept publicul iubitor de volei la sala din
            complexul LPS pentru cã tinerii noștri au nevoie de sprijin. Noi
            jucãm în principal cu sportivi crscuti la Suceava sau la Fãlticeni
            și încercãm sã ne batem cu marile forte ale voleiului românesc.’’
            Tudor Orășanu
          </p>
          <p className="campionat-naional-divizia">&nbsp;</p>
          <p className="suceava-a-reuit">
            ,,Suceava a reușit, după mai multe încercări, să promoveze în primul
            eșalon al voleiului masculin românesc. Pregătiți de Tudor Orășanu
            voleibaliștii au cedat în fața celor de la U Cluj, în Cupa României.
            ‘’ Sportexclusiv.ro
          </p>
        </div>
      </div>
      <div className="viziune-div">
        <img className="line-icon7" alt="" src="../line-17.svg" />
        <div className="viziune-div1">VIZIUNE</div>
        <img className="optics-2-1-icon" alt="" src="../optics2-1@2x.png" />
      </div>
      <div className="group-div2">
        <img className="lot-1-icon1" alt="" src="../lot-11@2x.png" />
        <div className="viz-div">
          <div className="line-div" />
          <div className="line-div1" />
          <div className="line-div2" />
          <div className="line-div3" />
          <div className="line-div4" />
          <div className="line-div5" />
          <i className="antrenm-i-pregtim-viitori-c">
            Antrenãm și pregãtim viitori campioni
          </i>
        </div>
      </div>
      <div className="trofee-div">
        <div className="trofee-div1">
          <img className="line-icon8" alt="" src="../line-18.svg" />
          <div className="trofee-div2">TROFEE</div>
          <img className="trophy-1-icon" alt="" src="../trophy-1@2x.png" />
        </div>
        <img
          className="csm-suceava-6-icon"
          alt=""
          src="../csmsuceava6@2x.png"
        />
        <div className="trofeu3-div">
          <img className="ellipse-icon3" alt="" src="../ellipse-14.svg" />
          <div className="trofeu3-div1">Trofeu3</div>
        </div>
        <div className="trofeu4-div">
          <img className="ellipse-icon3" alt="" src="../ellipse-141.svg" />
          <div className="trofeu3-div1">Trofeu4</div>
        </div>
        <div className="trofeu2-div">
          <img className="ellipse-icon3" alt="" src="../ellipse-142.svg" />
          <div className="trofeu2-div1">Trofeu2</div>
        </div>
        <div className="trofeu1-div">
          <img className="ellipse-icon3" alt="" src="../ellipse-143.svg" />
          <div className="trofeu3-div1">Trofeu1</div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Lot.css";

const Lot = () => {
  const navigate = useNavigate();

  const onContainer1Click = useCallback(() => {
    navigate("/players-history");
  }, [navigate]);

  const onHouse1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="lot-div3">
      <img className="lot-1-icon2" alt="" src="../lot-12@2x.png" />
      <div className="group-div3">
        <div className="div14">
          <div className="poza-1-div">
            <img className="ellipse-icon8" alt="" src="../ellipse-41.svg" />
            <img className="icon" alt="" src="../1-1@2x.png" />
          </div>
          <div className="tofan-elen-lucian-div">#1 TOFAN Elen-Lucian</div>
        </div>
        <div className="div15" onClick={onContainer1Click}>
          <img className="ellipse-icon8" alt="" src="../ellipse-42.svg" />
          <img
            className="teamplayer-176-2065-1-icon1"
            alt=""
            src="../teamplayer-176-2065-11@2x.png"
          />
          <div className="pop-darius-cristian1">#2 POP Darius Cristian</div>
        </div>
        <div className="div16">
          <img className="ellipse-icon8" alt="" src="../ellipse-5.svg" />
          <img
            className="teamplayer-176-2223-1-icon"
            alt=""
            src="../teamplayer-176-2223-1@2x.png"
          />
          <div className="verciuc-ioan-div">#4 VERCIUC Ioan</div>
        </div>
        <div className="div17">
          <img className="ellipse-icon8" alt="" src="../ellipse-51.svg" />
          <img className="icon1" alt="" src="../5-1@2x.png" />
          <div className="roman-alexandru-div">#5 ROMAN Alexandru</div>
        </div>
        <div className="div18">
          <img className="ellipse-icon8" alt="" src="../ellipse-6.svg" />
          <img className="icon2" alt="" src="../6-1@2x.png" />
          <div className="sasu-andrei-div">#6 SASU Andrei</div>
        </div>
        <div className="div19">
          <img className="ellipse-icon8" alt="" src="../ellipse-7.svg" />
          <img className="icon3" alt="" src="../7-1@2x.png" />
          <div className="hortopeanu-sabin-div">#7 HORTOPEANU Sabin</div>
        </div>
        <div className="div20">
          <img className="ellipse-icon8" alt="" src="../ellipse-8.svg" />
          <img className="icon4" alt="" src="../9-1@2x.png" />
          <div className="gontariu-marius-gabriel">
            #9 GONTARIU Marius Gabriel
          </div>
        </div>
        <div className="div21">
          <img className="ellipse-icon8" alt="" src="../ellipse-9.svg" />
          <img className="icon5" alt="" src="../10-1@2x.png" />
          <div className="platon-matei-div">#10 PLATON Matei</div>
        </div>
        <div className="div22">
          <img className="ellipse-icon8" alt="" src="../ellipse-10.svg" />
          <img
            className="teamplayer-176-2219-1-icon"
            alt=""
            src="../teamplayer-176-2219-1@2x.png"
          />
          <div className="boghean-cosmin-div">#11 BOGHEAN Cosmin</div>
        </div>
        <div className="div23">
          <img className="ellipse-icon8" alt="" src="../ellipse-101.svg" />
          <img className="icon6" alt="" src="../12-1@2x.png" />
          <div className="dragomir-alexandru-div">#12 DRAGOMIR Alexandru</div>
        </div>
        <div className="div24">
          <img className="ellipse-icon8" alt="" src="../ellipse-11.svg" />
          <img className="icon7" alt="" src="../13-1@2x.png" />
          <div className="ciubotariu-cezar-div">#13 CIUBOTARIU Cezar</div>
        </div>
        <div className="div25">
          <img className="ellipse-icon19" alt="" src="../ellipse-12.svg" />
          <img className="icon8" alt="" src="../14-1@2x.png" />
          <div className="ciubotaru-cosmin-robert-div">
            #14 CIUBOTARU Cosmin-Robert
          </div>
        </div>
        <div className="div26">
          <img className="ellipse-icon8" alt="" src="../ellipse-144.svg" />
          <img className="icon9" alt="" src="../15-1@2x.png" />
          <div className="curic-andrei-div">#15 CURIC Andrei</div>
        </div>
        <div className="antrenori-div">
          <img className="line-icon17" alt="" src="../line-110.svg" />
          <div className="antrenori-div1">ANTRENORI</div>
        </div>
        <div className="head-coach-div">
          <img className="ellipse-icon21" alt="" src="../ellipse-13.svg" />
          <img
            className="teamcoach-176-2224-1-icon"
            alt=""
            src="../teamcoach-176-2224-1@2x.png"
          />
          <div className="orasanu-tudor-marius">ORASANU Tudor Marius</div>
        </div>
        <div className="assistant-coach-div">
          <img className="ellipse-icon22" alt="" src="../ellipse-15.svg" />
          <img
            className="teamcoach-176-2225-1-icon"
            alt=""
            src="../teamcoach-176-2225-1@2x.png"
          />
          <div className="mosuc-vasile-div">MOSUC Vasile</div>
        </div>
      </div>
      <img
        className="house-1-icon8"
        alt=""
        src="../house-1@2x.png"
        onClick={onHouse1ImageClick}
      />
    </div>
  );
};

export default Lot;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onButonLotContainerClick = useCallback(() => {
    navigate("/lot");
  }, [navigate]);

  const onButonDetaliiContainerClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onButonNoutatiContainerClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onButonClasamentButtonClick = useCallback(() => {
    window.open("https://competitii.frvolei.eu/a1-masculin-sezon-2021-2022/");
  }, []);

  const onButonCalendarContainerClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onFacebookContainerClick = useCallback(() => {
    window.open(
      "https://ro-ro.facebook.com/people/VOLEI-CSM-Suceava/100057069055225/"
    );
  }, []);

  const onButonAccountContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButonVoleiJuvenilClick = useCallback(() => {
    navigate("/volei-juvenil");
  }, [navigate]);

  return (
    <div className="home-div">
      <div className="buton-lot-div" onClick={onButonLotContainerClick}>
        <div className="lot-div">LOT</div>
        <img className="rectangle-icon" alt="" src="../rectangle-5.svg" />
      </div>
      <div className="buton-detalii-div" onClick={onButonDetaliiContainerClick}>
        <div className="detalii-div">DETALII</div>
        <img className="rectangle-icon1" alt="" src="../rectangle-2.svg" />
      </div>
      <div className="buton-noutati-div" onClick={onButonNoutatiContainerClick}>
        <img className="rectangle-icon1" alt="" src="../rectangle-1.svg" />
        <div className="nouti-div">NOUTĂȚI</div>
      </div>
      <button
        className="buton-clasament-button"
        onClick={onButonClasamentButtonClick}
      >
        <div className="clasament-div">CLASAMENT</div>
        <img className="rectangle-icon3" alt="" src="../rectangle-4.svg" />
      </button>
      <div
        className="buton-calendar-div"
        onClick={onButonCalendarContainerClick}
      >
        <div className="calendar-div">CALENDAR</div>
        <img className="rectangle-icon4" alt="" src="../rectangle-3.svg" />
      </div>
      <div className="logo-div">
        <img className="logo-csm-1" alt="" src="../logo-csm-1@2x.png" />
        <div className="volei-csm-suceava">
          <p className="volei-csm-p">VOLEI C.S.M</p>
          <p className="suceava-p">SUCEAVA</p>
        </div>
      </div>
      <div className="facebook-div" onClick={onFacebookContainerClick}>
        <img className="facebook-1-icon" alt="" src="../facebook-1@2x.png" />
        <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
      </div>
      <div className="instagram-div">
        <img className="instagram-1-icon" alt="" src="../instagram-1@2x.png" />
        <img className="ellipse-icon" alt="" src="../ellipse-3.svg" />
      </div>
      <div className="phone-div">
        <img className="ellipse-icon" alt="" src="../ellipse-2.svg" />
        <img className="telephone-1-icon" alt="" src="../telephone-1@2x.png" />
      </div>
      <div className="buton-account-div" onClick={onButonAccountContainerClick}>
        <div className="rectangle-div" />
        <img className="account-1-icon" alt="" src="../account-1@2x.png" />
      </div>
      <div className="buton-volei-juvenil" onClick={onButonVoleiJuvenilClick}>
        <img className="rectangle-icon5" alt="" src="../rectangle-31.svg" />
        <div className="volei-juvenil-div">VOLEI JUVENIL</div>
      </div>
      <div className="parteneri-div">
        <img className="line-icon" alt="" src="../line-1.svg" />
        <div className="parteneri-div1">PARTENERI</div>
      </div>
      <div className="group-div">
        <div className="primaria-div">
          <img className="primaria-1-icon" alt="" src="../primaria-1@2x.png" />
          <div className="primria-i-consiliul-local-su">
            PRIMĂRIA ȘI CONSILIUL LOCAL SUCEAVA
          </div>
        </div>
        <div className="bazzil-div">
          <img className="images-1-icon" alt="" src="../images-1@2x.png" />
          <div className="bazzil-restaurant-div">BAZZIL RESTAURANT</div>
        </div>
        <div className="celestin-div">
          <img className="unknown-1-icon" alt="" src="../unknown-1@2x.png" />
          <div className="tipografia-celestin-div">TIPOGRAFIA CELESTIN</div>
        </div>
        <div className="bucovina-div">
          <img className="unknown-2-icon" alt="" src="../unknown-2@2x.png" />
          <div className="bucovina-health-club">BUCOVINA HEALTH CLUB</div>
        </div>
        <div className="assist-div">
          <img className="assist-1-icon" alt="" src="../assist-1@2x.png" />
          <div className="assist-software-div">ASSIST SOFTWARE</div>
        </div>
        <div className="suct-div">
          <img className="suct-icon" alt="" src="../suct@2x.png" />
          <div className="suct-div1">S.U.C.T</div>
        </div>
      </div>
      <img className="echipa-icon" alt="" src="../echipa@2x.png" />
    </div>
  );
};

export default Home;

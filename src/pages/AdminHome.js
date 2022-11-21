import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHome.css";

const AdminHome = () => {
  const navigate = useNavigate();

  const onButonLotContainerClick = useCallback(() => {
    navigate("/admin-players");
  }, [navigate]);

  const onButonClasamentButtonClick = useCallback(() => {
    window.open("https://competitii.frvolei.eu/a1-masculin-sezon-2021-2022/");
  }, []);

  const onLogout1ImageClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="admin-home-div">
      <img className="group-icon" alt="" src="../group-4.svg" />
      <div className="buton-lot-div1" onClick={onButonLotContainerClick}>
        <div className="lot-div1">LOT</div>
        <img className="rectangle-icon6" alt="" src="../rectangle-51.svg" />
      </div>
      <div className="buton-detalii-div1">
        <div className="detalii-div1">DETALII</div>
        <img className="rectangle-icon7" alt="" src="../rectangle-21.svg" />
      </div>
      <div className="buton-noutati-div1">
        <img className="rectangle-icon7" alt="" src="../rectangle-11.svg" />
        <div className="nouti-div1">NOUTĂȚI</div>
      </div>
      <button
        className="buton-clasament-button1"
        onClick={onButonClasamentButtonClick}
      >
        <div className="clasament-div1">CLASAMENT</div>
        <img className="rectangle-icon9" alt="" src="../rectangle-41.svg" />
      </button>
      <div className="buton-calendar-div1">
        <div className="calendar-div1">CALENDAR</div>
        <img className="rectangle-icon10" alt="" src="../rectangle-32.svg" />
      </div>
      <div className="logo-div1">
        <img className="logo-csm-11" alt="" src="../logo-csm-11@2x.png" />
        <div className="volei-csm-suceava1">
          <p className="volei-csm-p1">VOLEI C.S.M</p>
          <p className="suceava-p1">SUCEAVA</p>
        </div>
      </div>
      <div className="buton-volei-juvenil1">
        <img className="rectangle-icon11" alt="" src="../rectangle-33.svg" />
        <div className="volei-juvenil-div1">VOLEI JUVENIL</div>
      </div>
      <div className="parteneri-div2">
        <img className="line-icon1" alt="" src="../line-11.svg" />
        <div className="parteneri-div3">PARTENERI</div>
      </div>
      <img className="echipa-icon1" alt="" src="../echipa@2x.png" />
      <div className="adauga-parteneir-div">
        <img className="rectangle-icon12" alt="" src="../rectangle-22.svg" />
        <div className="adaug-parteneri-div">Adaugă parteneri</div>
      </div>
      <div className="sterge-parteneri-div">
        <img className="rectangle-icon13" alt="" src="../rectangle-42.svg" />
        <div className="terge-parteneri-div">Șterge parteneri</div>
      </div>
      <div className="editeaza-parteneri-div">
        <img className="rectangle-icon12" alt="" src="../rectangle-34.svg" />
        <div className="editeaz-parteneri-div">Editează parteneri</div>
      </div>
      <div className="group-div1">
        <div className="primaria-div1">
          <img className="primaria-1-icon1" alt="" src="../primaria-1@2x.png" />
          <div className="primria-i-consiliul-local-su1">
            PRIMĂRIA ȘI CONSILIUL LOCAL SUCEAVA
          </div>
        </div>
        <div className="bazzil-div1">
          <img className="images-1-icon1" alt="" src="../images-11@2x.png" />
          <div className="bazzil-restaurant-div1">BAZZIL RESTAURANT</div>
        </div>
        <div className="celestin-div1">
          <img className="unknown-1-icon1" alt="" src="../unknown-1@2x.png" />
          <div className="tipografia-celestin-div1">TIPOGRAFIA CELESTIN</div>
        </div>
        <div className="bucovina-div1">
          <img className="unknown-2-icon1" alt="" src="../unknown-2@2x.png" />
          <div className="bucovina-health-club1">BUCOVINA HEALTH CLUB</div>
        </div>
        <div className="assist-div1">
          <img className="assist-1-icon1" alt="" src="../assist-1@2x.png" />
          <div className="assist-software-div1">ASSIST SOFTWARE</div>
        </div>
        <div className="suct-div2">
          <img className="suct-icon1" alt="" src="../suct@2x.png" />
          <div className="suct-div3">S.U.C.T</div>
        </div>
      </div>
      <img
        className="logout-1-icon"
        alt=""
        src="../logout-1@2x.png"
        onClick={onLogout1ImageClick}
      />
    </div>
  );
};

export default AdminHome;

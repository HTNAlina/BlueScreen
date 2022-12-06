import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPlayers.css";

const AdminPlayers = () => {
  const navigate = useNavigate();

  const onHouse1ImageClick = useCallback(() => {
    navigate("/admin-home");
  }, [navigate]);

  return (
    <div className="admin-players-div">
      <img className="lot-1-icon" alt="" src="../lot-1@2x.png" />
      <img
        className="house-1-icon"
        alt=""
        src="../house-1@2x.png"
        onClick={onHouse1ImageClick}
      />
      <div className="adaugare-jucator-div">
        <img className="line-icon2" alt="" src="../line-12.svg" />
        <div className="adugare-juctor-div">Adăugare jucător</div>
      </div>
      <div className="editeaza-jucator-div">
        <img className="line-icon3" alt="" src="../line-13.svg" />
        <div className="editeaz-juctor-div">Editează jucător</div>
      </div>
      <div className="sterge-jucator-div">
        <img className="line-icon2" alt="" src="../line-12.svg" />
        <div className="terge-juctor-div">Șterge jucător</div>
      </div>
      <div className="sterge-juc-div">
        <img className="rectangle-icon15" alt="" src="../rectangle-8.svg" />
        <div className="buton-adaugare-jucator">
          <img className="rectangle-icon16" alt="" src="../rectangle-81.svg" />
          <div className="terge-juctor-div1">Șterge jucător</div>
        </div>
        <div className="alege-jucor-div">Alege jucător</div>
      </div>
      <div className="adauga-juc-div">
        <div className="nume-div">Nume</div>
        <img className="rectangle-icon17" alt="" src="../rectangle-12.svg" />
        <img className="rectangle-icon18" alt="" src="../rectangle-82.svg" />
        <img className="rectangle-icon19" alt="" src="../rectangle-23.svg" />
        <div className="numr-tricou-div">Număr tricou</div>
        <div className="club-div">{`Club `}</div>
        <div className="poziie-div">Poziție</div>
        <div className="nlime-div">{`Înălțime `}</div>
        <div className="data-naterii-div">Data nașterii</div>
        <img className="rectangle-icon20" alt="" src="../rectangle-7.svg" />
        <img className="rectangle-icon21" alt="" src="../rectangle-6.svg" />
        <img className="rectangle-icon22" alt="" src="../rectangle-52.svg" />
        <img className="rectangle-icon23" alt="" src="../rectangle-43.svg" />
        <img className="rectangle-icon24" alt="" src="../rectangle-35.svg" />
        <img className="rectangle-icon25" alt="" src="../rectangle-24.svg" />
        <div className="naionaliate-div">Naționaliate</div>
        <div className="buton-adaugare-jucator1">
          <img className="rectangle-icon16" alt="" src="../rectangle-83.svg" />
          <div className="adugare-juctor-div1">Adăugare jucător</div>
        </div>
        <div className="prenume-div">Prenume</div>
        <div className="echip-1-div">Echipă 1</div>
        <img className="rectangle-icon27" alt="" src="../rectangle-9.svg" />
        <div className="dat-1-div">Dată 1</div>
        <img className="rectangle-icon28" alt="" src="../rectangle-10.svg" />
        <div className="echip-2-div">Echipă 2</div>
        <img className="rectangle-icon29" alt="" src="../rectangle-111.svg" />
        <div className="dat-2-div">Dată 2</div>
      </div>
      <div className="edit-juc-div">
        <div className="nume-div">Nume</div>
        <img className="rectangle-icon17" alt="" src="../rectangle-13.svg" />
        <img className="rectangle-icon18" alt="" src="../rectangle-84.svg" />
        <img className="rectangle-icon19" alt="" src="../rectangle-25.svg" />
        <div className="numr-tricou-div">Număr tricou</div>
        <div className="club-div">{`Club `}</div>
        <div className="poziie-div">Poziție</div>
        <div className="nlime-div">{`Înălțime `}</div>
        <div className="data-naterii-div">Data nașterii</div>
        <img className="rectangle-icon20" alt="" src="../rectangle-71.svg" />
        <img className="rectangle-icon21" alt="" src="../rectangle-61.svg" />
        <img className="rectangle-icon22" alt="" src="../rectangle-53.svg" />
        <img className="rectangle-icon23" alt="" src="../rectangle-44.svg" />
        <img className="rectangle-icon24" alt="" src="../rectangle-36.svg" />
        <img className="rectangle-icon25" alt="" src="../rectangle-26.svg" />
        <div className="naionaliate-div">Naționaliate</div>
        <div className="buton-adaugare-jucator1">
          <img className="rectangle-icon16" alt="" src="../rectangle-85.svg" />
          <div className="editare-juctor-div">Editare jucător</div>
        </div>
        <div className="prenume-div">Prenume</div>
        <div className="echip-1-div">Echipă 1</div>
        <img className="rectangle-icon27" alt="" src="../rectangle-91.svg" />
        <div className="dat-1-div">Dată 1</div>
        <img className="rectangle-icon28" alt="" src="../rectangle-101.svg" />
        <div className="echip-2-div">Echipă 2</div>
        <img className="rectangle-icon29" alt="" src="../rectangle-112.svg" />
        <div className="dat-2-div">Dată 2</div>
      </div>
    </div>
  );
};

export default AdminPlayers;

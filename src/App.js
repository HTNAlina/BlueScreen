import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import AdminPlayers from "./pages/AdminPlayers";
import VoleiJuvenil from "./pages/VoleiJuvenil";
import Details from "./pages/Details";
import News from "./pages/News";
import PlayersHistory from "./pages/PlayersHistory";
import LastMatch from "./pages/LastMatch";
import NextMatch from "./pages/NextMatch";
import Calendar from "./pages/Calendar";
import Lot from "./pages/Lot";
import LogIn from "./pages/LogIn";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-home":
        title = "";
        metaDescription = "";
        break;
      case "/admin-players":
        title = "";
        metaDescription = "";
        break;
      case "/volei-juvenil":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
      case "/players-history":
        title = "";
        metaDescription = "";
        break;
      case "/last-match":
        title = "";
        metaDescription = "";
        break;
      case "/next-match":
        title = "";
        metaDescription = "";
        break;
      case "/calendar":
        title = "";
        metaDescription = "";
        break;
      case "/lot":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin-home" element={<AdminHome />} />

      <Route path="/admin-players" element={<AdminPlayers />} />

      <Route path="/volei-juvenil" element={<VoleiJuvenil />} />

      <Route path="/details" element={<Details />} />

      <Route path="/news" element={<News />} />

      <Route path="/players-history" element={<PlayersHistory />} />

      <Route path="/last-match" element={<LastMatch />} />

      <Route path="/next-match" element={<NextMatch />} />

      <Route path="/calendar" element={<Calendar />} />

      <Route path="/lot" element={<Lot />} />

      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}
export default App;

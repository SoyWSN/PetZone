import { useState } from "react";
import Navbar      from "./components/Navbar";
import PageContent from "./components/PageContent";
import { PAGES }   from "./data/store";
import "./styles/global.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    if (PAGES[page] !== undefined) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar cartCount={0} onNavigate={navigate} />

      <main className="main-content">
        <PageContent page={currentPage} onNavigate={navigate} />
      </main>

      <footer className="footer">
        {/* Reemplaza con tu logo real: <img src={logo} alt="PetZone" className="footer__logo" /> */}
        <img
          src="/img/logo2.png"
          alt="PetZone"
          className="footer__logo"
        />
        <p className="footer__text">© 2026 PetZone — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

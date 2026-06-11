import { useState } from "react";
import Navbar      from "./components/Navbar";
import PageContent from "./components/PageContent";
import NotFound    from "./components/NotFound";
import { PAGES }   from "./data/store";
import "./styles/global.css";

export default function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.replace("/", "") || "home";
    return PAGES[path] !== undefined ? path : "404";
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  const navigate = (page) => {
    if (PAGES[page] !== undefined) {
      setCurrentPage(page);
      window.history.pushState({}, "", `/${page === "home" ? "" : page}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar cartCount={0} onNavigate={navigate} />

      <main className="main-content">
        {currentPage === "404"
          ? <NotFound onNavigate={navigate} />
          : <PageContent page={currentPage} onNavigate={navigate} />
        }
      </main>

      <footer className="footer">
        <img src="/img/logo2.png" alt="PetZone" className="footer__logo" />
        <p className="footer__text">© 2026 PetZone — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
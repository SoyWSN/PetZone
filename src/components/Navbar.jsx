import { useState } from "react";
import { CATEGORIES } from "../data/store";

const LOGO_PLACEHOLDER = "/img/logo2.png";

export default function Navbar({ cartCount, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (key) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <button className="navbar__logo" onClick={() => handleNav("home")}>
          <img src={LOGO_PLACEHOLDER} alt="PetZone logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Pet<span>Zone</span></span>
        </button>

        {/* Nav links — escritorio */}
        <nav className="navbar__nav">
          {["tienda", "perros", "gatos", "aves", "peces"].map((key) => (
            <button key={key} className="navbar__nav-btn" onClick={() => handleNav(key)}>
              {CATEGORIES[key].label}
            </button>
          ))}
        </nav>

        {/* Search + Cart — escritorio */}
        <div className="navbar__actions">
          <div className="navbar__search">
            <span className="navbar__search-placeholder">Buscar productos...</span>
          </div>
          <button className="navbar__cart-btn">
            Carrito
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </button>
        </div>

        {/* Botón hamburguesa — solo móvil */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`navbar__hamburger-icon ${menuOpen ? "navbar__hamburger-icon--open" : ""}`}>
            <span /><span /><span />
          </span>
        </button>

      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {["tienda", "perros", "gatos", "aves", "peces"].map((key) => (
            <button key={key} className="navbar__mobile-btn" onClick={() => handleNav(key)}>
              {CATEGORIES[key].label}
            </button>
          ))}
          <div className="navbar__mobile-actions">
            <div className="navbar__search navbar__search--mobile">
              <span className="navbar__search-placeholder">Buscar productos...</span>
            </div>
            <button className="navbar__cart-btn">
              Carrito
              {cartCount > 0 && (
                <span className="navbar__cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
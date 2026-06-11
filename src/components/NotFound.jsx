export default function NotFound({ onNavigate }) {
  return (
    <div className="nf-wrapper">
      <header className="navbar">
        <div className="navbar__inner">
          <button className="navbar__logo" onClick={() => onNavigate("home")}>
            <img src="/img/logo2.png" alt="PetZone" className="navbar__logo-img" />
            <span className="navbar__logo-text">Pet<span>Zone</span></span>
          </button>
        </div>
      </header>

      <main className="nf-main">
        <div className="nf-card">
          <p className="nf-card__code">404</p>
          <div className="nf-card__divider" />
          <h1 className="nf-card__title">Página no encontrada</h1>
          <p className="nf-card__description">
            La página que buscas no existe o fue movida a otra dirección.
            Regresa al inicio y encuentra todo lo que tu mascota necesita.
          </p>
          <div className="nf-card__actions">
            <button className="btn-primary" onClick={() => onNavigate("home")}>
              Ir al inicio
            </button>
            <button className="btn-secondary" onClick={() => onNavigate("tienda")}>
              Ver tienda
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer__text">© 2026 PetZone — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

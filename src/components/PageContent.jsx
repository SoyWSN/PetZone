import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

import {
  CATEGORIES,
  PAGES,
  PRODUCTS,
  FEATURED_CATEGORIES,
  DOG_SUBCATEGORIES,
  CAT_SUBCATEGORIES,
  BIRD_SUBCATEGORIES,
  FISH_SUBCATEGORIES,
} from "../data/store";

const HERO_IMG    = "/img/hero.webp";
const PREMIUM_IMG = "/img/premium.png";
const EMPTY_IMG   = "https://placehold.co/80x80/f0f0f5/ccc?text=...";

// ─── CATEGORY CARD ────────────────────────────────────────────────────────────

function CategoryCard({ item, onNavigate, wide = false }) {
  return (
    <button
      className="category-card"
      style={{ borderColor: `${item.color}44` }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${item.color}44`)}
      onClick={() => onNavigate(item.key)}
    >
      <div className={`category-card__image-wrap ${wide ? "category-card__image-wrap--wide" : ""}`}>
        <img src={item.image} alt={item.label} className="category-card__image" loading="lazy" />
      </div>
      <div className="category-card__body">
        <span className="category-card__label">{item.label}</span>
        <span className="category-card__hint">Ver productos →</span>
      </div>
    </button>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
// ─── HERO CAROUSEL ────────────────────────────────────────────────────────────

const HERO_IMAGES = [
  { src: "/img/hero.webp",  alt: "Perro feliz" },
  { src: "https://static.boredpanda.com/blog/wp-content/uploads/2023/01/funny-witty-pictures-of-cats-nils-jacobi-fb21.png", alt: "Gato feliz" },
  { src: "https://www.shutterstock.com/image-photo/parrot-bitesplayful-birdbeautiful-photo-birdornithologyfunny-600nw-2310987569.jpg", alt: "Ave feliz" },
  { src: "https://t4.ftcdn.net/jpg/07/14/79/69/360_F_714796903_IN2WlLEghO5wVtMnyoDysOCN2ttqFOJi.jpg",  alt: "Pez feliz" }
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-avance cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  const next = () => setCurrent((current + 1) % HERO_IMAGES.length);

  return (
    <div className="carousel">
      {/* Imágenes */}
      {HERO_IMAGES.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`carousel__img ${i === current ? "carousel__img--active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Flechas */}
      <button className="carousel__arrow carousel__arrow--left" onClick={prev}>‹</button>
      <button className="carousel__arrow carousel__arrow--right" onClick={next}>›</button>

      {/* Dots */}
      <div className="carousel__dots">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === current ? "carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      {/* Hero: dos columnas — texto | imagen */}
      <section className="hero">
        <div className="hero__content">
          <p className="hero__label">Todo para tu mascota</p>
          <h1 className="hero__title">
            Tu mascota merece<br />
            <span>lo mejor del mundo</span>
          </h1>
          <p className="hero__description">
            Más de 1,000 productos para perros, gatos, aves y peces.
            Envío gratis en pedidos mayores a $599.
          </p>
          <div className="hero__actions">
            <button className="hero__btn-primary" onClick={() => onNavigate("tienda")}>
              Explorar Tienda
            </button>
            <button className="hero__btn-secondary">Ver Ofertas</button>
          </div>
        </div>

       <div className="hero__image-wrap">
          <HeroCarousel />
      </div>
      </section>

      <h2 className="section-title">Para tus mascotas: </h2>
      <div className="categories-grid">
        {FEATURED_CATEGORIES.map((cat) => (
          <CategoryCard key={cat.key} item={cat} onNavigate={onNavigate} />
        ))}
      </div>

      <h2 className="section-title">Los más Vendidos</h2>
      <div className="products-grid">
        {PRODUCTS.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

// ─── TIENDA ───────────────────────────────────────────────────────────────────

function StorePage({ onNavigate }) {
  return (
    <>
      <Breadcrumb path={PAGES.tienda.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">Tienda</h2>
      <p className="section-subtitle">Explora por categoría de mascota</p>
      <div className="store-grid">
        {FEATURED_CATEGORIES.map((cat) => (
          <CategoryCard key={cat.key} item={cat} onNavigate={onNavigate} wide />
        ))}
      </div>
    </>
  );
}

// ─── PERROS ───────────────────────────────────────────────────────────────────

function DogsPage({ onNavigate }) {
  return (
    <>
      <Breadcrumb path={PAGES.perros.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">Perros</h2>
      <p className="section-subtitle">Todo lo que necesita tu fiel amigo</p>
      <div className="subcategories-grid">
        {DOG_SUBCATEGORIES.map((sub) => (
          <CategoryCard key={sub.key} item={sub} onNavigate={onNavigate} wide />
        ))}
      </div>
    </>
  );
}

// ─── GATOS ────────────────────────────────────────────────────────────────────

function CatsPage({ onNavigate }) {
  return (
    <>
      <Breadcrumb path={PAGES.gatos.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">Gatos</h2>
      <p className="section-subtitle">Productos especiales para tu minino</p>
      <div className="subcategories-grid">
        {CAT_SUBCATEGORIES.map((sub) => (
          <CategoryCard key={sub.key} item={sub} onNavigate={onNavigate} wide />
        ))}
      </div>
    </>
  );
}

function BirdsPage({ onNavigate }) {
  return (
    <>
      <Breadcrumb path={PAGES.aves.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">Aves</h2>
      <p className="section-subtitle">Todo para tu compañero emplumado</p>
      <div className="subcategories-grid">
        {BIRD_SUBCATEGORIES.map((sub) => (
          <CategoryCard key={sub.key} item={sub} onNavigate={onNavigate} wide />
        ))}
      </div>
    </>
  );
}

function FishPage({ onNavigate }) {
  return (
    <>
      <Breadcrumb path={PAGES.peces.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">Peces</h2>
      <p className="section-subtitle">Todo para tu acuario perfecto</p>
      <div className="subcategories-grid">
        {FISH_SUBCATEGORIES.map((sub) => (
          <CategoryCard key={sub.key} item={sub} onNavigate={onNavigate} wide />
        ))}
      </div>
    </>
  );
}

// ─── PLACEHOLDER ─────────────────────────────────────────────────────────────

function PlaceholderPage({ pageKey, onNavigate }) {
  const page = PAGES[pageKey];
  const info = CATEGORIES[pageKey];
  return (
    <>
      <Breadcrumb path={page.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">{info.label}</h2>
      <p className="section-subtitle">Próximamente más productos para {info.label.toLowerCase()}</p>
      <div className="empty-state">
        <img src={EMPTY_IMG} alt="" className="empty-state__image" />
        <p className="empty-state__text">Estamos trabajando en esta sección</p>
      </div>
    </>
  );
}

// ─── ALIMENTO PERROS ──────────────────────────────────────────────────────────

function DogFoodPage({ onNavigate }) {
  const products = PRODUCTS.filter((p) => p.category === "alimento_perros");
  return (
    <>
      <Breadcrumb path={PAGES.alimento_perros.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">Alimento para Perros</h2>
      <p className="section-subtitle">Nutrición de calidad para tu compañero</p>
      <div className="products-grid">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}

// ─── GENERIC PRODUCT PAGE ────────────────────────────────────────────────────

function GenericProductPage({ pageKey, onNavigate }) {
  const pageInfo = PAGES[pageKey];
  const products = PRODUCTS.filter((p) => p.category === pageKey);
  const lastKey  = pageInfo.breadcrumb[pageInfo.breadcrumb.length - 1];
  const catInfo  = CATEGORIES[lastKey] || { label: "Categoría" };
  return (
    <>
      <Breadcrumb path={pageInfo.breadcrumb} onNavigate={onNavigate} />
      <h2 className="page-title">{pageInfo.title || catInfo.label}</h2>
      <p className="section-subtitle">{products.length} productos disponibles</p>
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="empty-state">
          <img src={EMPTY_IMG} alt="" className="empty-state__image" />
          <p className="empty-state__text">Productos próximamente</p>
        </div>
      )}
    </>
  );
}

// ─── ROUTER ───────────────────────────────────────────────────────────────────

export default function PageContent({ page, onNavigate }) {
  switch (page) {
    case "home":             return <HomePage           onNavigate={onNavigate} />;
    case "tienda":           return <StorePage          onNavigate={onNavigate} />;
    case "perros":           return <DogsPage           onNavigate={onNavigate} />;
    case "gatos":            return <CatsPage           onNavigate={onNavigate} />;
    case "aves":             return <BirdsPage          onNavigate={onNavigate} />;
    case "peces":            return <FishPage           onNavigate={onNavigate} />;
    case "alimento_perros":  return <DogFoodPage        onNavigate={onNavigate} />;
    default:                 return <GenericProductPage pageKey={page} onNavigate={onNavigate} />;
  }
}

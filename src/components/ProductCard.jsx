import { useState } from "react";

export default function ProductCard({ product }) {
  const [inCart, setInCart] = useState(false);

  const tagClass =
    product.tag === "Premium" ? "product-card__tag--premium"
    : product.tag === "Nuevo" ? "product-card__tag--nuevo"
    : "product-card__tag--default";

  return (
    <div className="product-card">
      {product.tag && (
        <span className={`product-card__tag ${tagClass}`}>{product.tag}</span>
      )}

      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__rating">
          {"★".repeat(Math.floor(product.rating))} {product.rating}
        </p>

        <div className="product-card__footer">
          <span className="product-card__price">
            ${product.price.toLocaleString()}
          </span>
          <button
            className={`product-card__btn ${
              inCart ? "product-card__btn--added" : "product-card__btn--add"
            }`}
            onClick={() => setInCart(!inCart)}
          >
            {inCart ? "Añadido" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
}

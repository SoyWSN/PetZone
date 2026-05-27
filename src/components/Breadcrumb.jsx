import { CATEGORIES, PAGES } from "../data/store";

/**
 * Breadcrumb jerárquico
 * path: array de keys, ej: ["home", "tienda", "perros", "alimento"]
 * Cada nivel (excepto el último) es un botón navegable.
 */
export default function Breadcrumb({ path, onNavigate }) {
  if (!path || path.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb__list">
        {path.map((key, index) => {
          const cat    = CATEGORIES[key];
          const isLast = index === path.length - 1;

          // Busca en PAGES cuál entrada tiene exactamente el mismo breadcrumb
          // hasta este índice — funciona para cualquier profundidad
          const currentSlice = path.slice(0, index + 1);
          const targetPage = Object.keys(PAGES).find((pageKey) => {
            const b = PAGES[pageKey].breadcrumb;
            return (
              b.length === currentSlice.length &&
              b.every((k, i) => k === currentSlice[i])
            );
          }) ?? "home";

          return (
            <li key={key} className="breadcrumb__item">
              {index > 0 && (
                <span className="breadcrumb__separator" aria-hidden="true">›</span>
              )}

              {isLast ? (
                <span className="breadcrumb__current" aria-current="page">
                  {cat.label}
                </span>
              ) : (
                <button
                  className="breadcrumb__link"
                  onClick={() => onNavigate(targetPage)}
                  aria-label={`Ir a ${cat.label}`}
                >
                  {cat.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination({ currentPage = 1, totalPages = 10 }) {
  // Generar una lista de paginas
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Estilos para deshabilitar los botones
  const stylePrevButton = isFirstPage
    ? { pointerEvents: 'none', opacity: 0.5 }
    : {};
  const styleNextButton = isLastPage
    ? { pointerEvents: 'none', opacity: 0.5 }
    : {};

  return (
    <nav className='pagination'>
      <a
        href='#'
        style={stylePrevButton}
      >
        <ChevronLeft />
      </a>

      {/* Renderizar las paginas */}
      {pages.map((page) => (
        <a
          href='#'
          className={currentPage === page ? 'is-active' : ''}
        >
          {page}
        </a>
      ))}

      <a
        href='#'
        style={styleNextButton}
      >
        <ChevronRight />
      </a>
    </nav>
  );
}

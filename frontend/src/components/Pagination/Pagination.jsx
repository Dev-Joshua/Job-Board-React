import { ChevronLeft, ChevronRight } from 'lucide-react';

import styles from './Pagination.module.css';

export function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {
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

  // Ir a la pagina anterior
  const handlePrevClick = (e) => {
    e.preventDefault();
    if (isFirstPage === false) {
      onPageChange(currentPage - 1);
    }
  };

  // Ir a la pagina siguiente
  const handleNextClick = (e) => {
    e.preventDefault();
    if (isLastPage === false) {
      onPageChange(currentPage + 1);
    }
  };

  // Cambiar a una pagina especifica
  const handleChangePage = (event, page) => {
    event.preventDefault();
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className={styles.pagination}>
      <a
        href='#'
        style={stylePrevButton}
        onClick={handlePrevClick}
      >
        <ChevronLeft />
      </a>

      {/* Renderizar las paginas */}
      {pages.map((page) => (
        <a
          href='#'
          key={page}
          className={currentPage === page ? styles.isActive : ''}
          onClick={(event) => handleChangePage(event, page)}
        >
          {page}
        </a>
      ))}

      <a
        href='#'
        style={styleNextButton}
        onClick={handleNextClick}
      >
        <ChevronRight />
      </a>
    </nav>
  );
}

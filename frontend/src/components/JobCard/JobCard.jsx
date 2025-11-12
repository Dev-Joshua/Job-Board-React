import { useState } from 'react';
import styles from './JobCard.module.css';

export function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false);

  // Manejar el clic en el botón de aplicar
  function handleApplyClick() {
    setIsApplied(true);
  }

  const text = isApplied ? 'Aplicado' : 'Aplicar';
  const buttonClass = isApplied ? styles.isApplied : '';
  const isAppliedText = isApplied ? 'Sí' : 'No';

  return (
    <article
      className={styles.jobListingCard}
      data-modalidad={job.data.modalidad}
      data-nivel={job.data.nivel}
      data-technology={job.data.technology}
    >
      <div>
        <h3>{job.titulo}</h3>
        <small>
          {job.empresa} | {job.ubicacion} - ¿Aplicado? {isAppliedText}
        </small>
        <p>{job.descripcion}</p>
      </div>
      <button
        // Agregar la clase 'is-applied' si el trabajo ha sido aplicado
        className={`${styles.buttonApplyJob} ${buttonClass}`}
        onClick={handleApplyClick}
      >
        {text}
      </button>
    </article>
  );
}

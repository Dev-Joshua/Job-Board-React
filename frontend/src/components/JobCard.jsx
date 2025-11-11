import React from 'react';

export function JobCard({ job }) {
  const [isApplied, setIsApplied] = React.useState(false);

  // Manejar el clic en el botón de aplicar
  function handleClick() {
    setIsApplied(!isApplied);
  }

  const text = isApplied ? 'Aplicado' : 'Aplicar';
  const buttonClass = isApplied ? 'is-applied' : '';
  const isAppliedText = isApplied ? 'Sí' : 'No';

  return (
    <article
      className='job-listing-card'
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
        className={`button-apply-job ${buttonClass}`}
        onClick={handleClick}
      >
        {text}
      </button>
    </article>
  );
}

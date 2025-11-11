import React from 'react';

export function JobCard({ titulo, empresa, ubicacion, descripcion }) {
  const [isApplied, setIsApplied] = React.useState(false);

  // Manejar el clic en el botón de aplicar
  function handleClick() {
    setIsApplied(!isApplied);
  }

  const text = isApplied ? 'Aplicado' : 'Aplicar';
  const buttonClass = isApplied ? 'is-applied' : '';
  const isAppliedText = isApplied ? 'Sí' : 'No';

  return (
    <article className='job-listing-card'>
      <div>
        <h3>{titulo}</h3>
        <small>
          {empresa} | {ubicacion} - ¿Aplicado? {isAppliedText}
        </small>
        <p>{descripcion}</p>
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

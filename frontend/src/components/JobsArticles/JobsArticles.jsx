import { BriefcaseBusiness, Blocks, Users } from 'lucide-react';

import styles from './JobsArticles.module.css';

export function JobsArticles() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.div}>
          <h2>¿Por qué DevJobs?</h2>
          <p>
            DevJobs es la principal plataforma de búsqueda de empleo para
            desarrolladores. Conectamos a los mejores talentos con las empresas
            más innovadoras.
          </p>
        </div>

        <footer>
          <article>
            <BriefcaseBusiness className='svg' />
            <h3>Encuentra el trabajo de tus sueños</h3>
            <p>
              Busca miles de empleos de las mejores empresas de todo el mundo.
            </p>
          </article>

          <article>
            <Users className='svg' />
            <h3>Conecta con las mejores empresas</h3>
            <p>
              Conecta con empresas que están contratando por tus habilidades.
            </p>
          </article>

          <article>
            <Blocks className='svg' />
            <h3>Obtén el salario que mereces</h3>
            <p>
              Obtén el salario que mereces con nuestra calculadora de salarios.
            </p>
          </article>
        </footer>
      </section>

      <hr />
    </>
  );
}

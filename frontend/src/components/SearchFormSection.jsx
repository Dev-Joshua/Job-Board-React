import { Search } from 'lucide-react';

export function SearchFormSection() {
  return (
    <>
      <section className='jobs-search'>
        <h1>Encuentra tu próximo trabajo</h1>
        <p>
          Explora miles de oportunidades laborales en el sector tecnológico.
        </p>
        <form
          id='jobs-search-form'
          role='search'
        >
          <div className='search-bar'>
            <Search className='search-icon' />
            <input
              name='search'
              id='jobs-search-input'
              required
              type='text'
              placeholder='Buscar trabajos, empresas o habilidades'
            />
          </div>

          <div className='search-filters'>
            <select
              name='technology'
              id='filter-technology'
            >
              <option value=''>Tecnología</option>
              <optgroup label='Tecnologías populares'>
                <option value='javascript'>JavaScript</option>
                <option value='python'>Python</option>
                <option value='react'>React</option>
                <option value='nodejs'>Node.js</option>
              </optgroup>
              <option value='java'>Java</option>
              <hr />
              <option value='csharp'>C#</option>
              <option value='c'>C</option>
              <option value='c++'>C++</option>
              <hr />
              <option value='ruby'>Ruby</option>
              <option value='php'>PHP</option>
            </select>

            <select
              name='location'
              id='filter-location'
            >
              <option value=''>Ubicación</option>
              <option value='remoto'>Remoto</option>
              <option value='cdmx'>Ciudad de México</option>
              <option value='guadalajara'>Guadalajara</option>
              <option value='monterrey'>Monterrey</option>
              <option value='barcelona'>Barcelona</option>
            </select>

            <select
              name='experience-level'
              id='filter-experience-level'
            >
              <option value=''>Nivel de experiencia</option>
              <option value='junior'>Junior</option>
              <option value='mid'>Mid-level</option>
              <option value='senior'>Senior</option>
              <option value='lead'>Lead</option>
            </select>
          </div>
        </form>
        <span id='filter-selected-value'></span>
      </section>
    </>
  );
}

import { useState } from 'react';

import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Pagination } from './components/Pagination/Pagination.jsx';
import { JobsArticles } from './components/JobsArticles/JobsArticles.jsx';
import { SearchFormSection } from './components/SearchForm/SearchFormSection.jsx';
import { JobList } from './components/JobList/JobList.jsx';

import jobsData from './data.json';

const RESULTS_PER_PAGE = 4;

function App() {
  // Estado para la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  // Calcular el total de paginas con base en los trabajos y resultados por pagina
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  // Obtener los trabajos para la pagina actual
  const pagedResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  // Manejar el cambio de pagina
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          <JobList jobs={pagedResults} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          <JobsArticles />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;

import { useState } from 'react';

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Pagination } from './components/Pagination.jsx';
import { JobsArticles } from './components/JobsArticles.jsx';
import { SearchFormSection } from './components/SearchFormSection.jsx';
import { JobList } from './components/JobList.jsx';

function App() {
  // Estado para la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (newPage) => {
    console.log('Página cambiada a:', newPage);
    setCurrentPage(newPage);
  };
  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          <JobList />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      {/* <JobsArticles /> */}
      <Footer />
    </>
  );
}

export default App;

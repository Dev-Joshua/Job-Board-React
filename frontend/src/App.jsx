import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Pagination } from './components/Pagination.jsx';
import { JobsArticles } from './components/JobsArticles.jsx';
import { SearchFormSection } from './components/SearchFormSection.jsx';
import { JobList } from './components/JobList.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          <JobList />
          <Pagination />
        </section>
      </main>

      {/* <JobsArticles /> */}
      <Footer />
    </>
  );
}

export default App;

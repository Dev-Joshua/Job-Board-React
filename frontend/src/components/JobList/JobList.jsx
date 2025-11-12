import { JobCard } from '../JobCard/JobCard.jsx';

import styles from './JobList.module.css';

export function JobList({ jobs }) {
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      <div className={styles.jobsListings}>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </>
  );
}

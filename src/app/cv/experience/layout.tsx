import { IJob } from '@/model/job';
import TimeBar from '@/components/TimeBar/TimeBar';
import { jobsMock } from './jobs.mock';
import styles from './page.module.css'

export const metadata = {
  title: 'Giovanny Arias - Experience',
  description: 'Giovanny Arias, Professional experience',
}

async function getJobs() {
  // const res = await fetch('http://127.0.0.1:3001/api/jobs')
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return res.json();
  console.log('entra a consultar');
  return jobsMock;
}

const CV = async ({ children }: { children: React.ReactNode }) => {

  const jobs = await getJobs()

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Professional Experience
      </div>
      <div className={styles.timeBarContainer}>
        <TimeBar jobs={jobs.filter((job: any) => job.company)}  />
      </div>
      {children}
    </div>
  )
}

export default CV
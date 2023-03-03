import TimeBar from '@/app/components/TimeBar/TimeBar';
import { IJob } from '@/app/model/job';
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
  return jobsMock;
}

const CV = async () => {

  const jobs = await getJobs()

  return (
    <div className={styles.container}>
      Professional Experience
      <div className={styles.timeBarContainer}>
        <TimeBar jobs={jobs.filter((job: any) => job.company)} />
      </div>
    </div>
  )
}

export default CV
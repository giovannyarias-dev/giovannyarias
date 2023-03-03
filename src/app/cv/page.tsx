import TimeBar from '../components/TimeBar/TimeBar'
import { IJob } from '../model/job'
import styles from './page.module.css'

export const metadata = {
  title: 'Giovanny Arias - Curriculum Vitae',
  description: 'Curriculum Vitae of Giovanny Arias',
}

async function getJobs() {
  const res = await fetch('http://127.0.0.1:3001/api/jobs')
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const CV = async () => {

  const jobs = await getJobs()

  return (
    <div className={styles.container}>
    </div>
  )
}

export default CV
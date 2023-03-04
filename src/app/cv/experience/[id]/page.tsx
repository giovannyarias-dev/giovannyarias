import React from 'react'
import { jobsMock } from '../jobs.mock';
import styles from './page.module.css'

async function getJob(jobId: string) {
  // const res = await fetch('http://127.0.0.1:3001/api/jobs')
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return res.json();
  console.log('entra a consultar');
  return jobsMock.find(job => job.id === jobId);
}

const Job = async ({ params }: { params: {id: string}}) => {

  const job = await getJob(params.id);

  return (
    <div className={styles.sidebar}>
      <h1>{ job.name }</h1>
      <h2>{ job?.company?.name }</h2>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div>Prueba</div>
      <div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div><div>Prueba</div>
    </div>
  )
}

export default Job
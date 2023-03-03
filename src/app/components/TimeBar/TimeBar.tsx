"use client";
import { IJob } from '@/app/model/job';
import { useEffect, useState } from 'react';
import { TimeBarStyled } from './TimeBar.styled'

type Props = {
  jobs: any[]
}

const getYears = (jobs: IJob[]) => {
  const max = new Date().getFullYear()
  const min = new Date(jobs[jobs.length-1].startDate).getFullYear()
  let years = []

  for (let i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}

const TimeBar: React.FC<Props> = ({ jobs }) => {

  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    setYears(getYears(jobs));
  }, []);
  
  return (
    <TimeBarStyled>
      <div className='years-grid'>
        {years.map(year => (
          <div className='year' key={year}>
            <div className='divider'/>
            {year}
          </div>
        ))}
      </div>
      <div className='duration-grid'>
        {jobs.map(job => (
          <div className='duration' key={job.id} />
        ))}
      </div>
    </TimeBarStyled>
  )
}

export default TimeBar
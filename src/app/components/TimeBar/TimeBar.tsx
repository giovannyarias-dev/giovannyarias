"use client";
import { IJob } from '@/app/model/job';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { JobStyled, TimeBarStyled, YearStyled } from './TimeBar.styled'

const YEAR_HEIGHT = 50;
const DAY_HEIGHT = YEAR_HEIGHT / 365;

const getYears = (jobs: IJob[]) => {
  const max = new Date().getFullYear()
  const min = new Date(jobs[jobs.length-1].startDate).getFullYear()
  let years = []

  for (let i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}

const getDurationHeight = (job: IJob) => {
  const startDate = dayjs(job.startDate)
  const endDate = dayjs(job.endDate? job.endDate: new Date())
  const daysDifference = endDate.diff(startDate, 'days')
  return daysDifference * DAY_HEIGHT;
}

const getDurationMargin = (job: IJob) => {
  const endDate = dayjs(job.endDate? job.endDate: new Date());
  const endActualYear = dayjs().endOf('year')
  const daysDifference = endActualYear.diff(endDate, 'days')
  return daysDifference * DAY_HEIGHT;
}

type Props = {
  jobs: any[]
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
          <YearStyled height={YEAR_HEIGHT} key={year}>
            <div className='divider'/>
            {year}
          </YearStyled>
        ))}
      </div>
      <div className='duration-grid'>
        {jobs.map((job, index) => (
          <JobStyled 
            color={job.company.color} 
            key={job.id}
            height={getDurationHeight(job)}
            margin={getDurationMargin(job)}
            order={index+1}
          >
            <div className="duration"></div>
            <div className='job'>
              {job.name}
              <div className='company'>
                {job.company.name}
              </div>
            </div>
          </JobStyled>
        ))}
      </div>
    </TimeBarStyled>
  )
}

export default TimeBar
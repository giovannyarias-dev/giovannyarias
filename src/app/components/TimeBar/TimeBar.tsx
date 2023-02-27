import { IJob } from '@/app/model/job';

type Props = {
  jobs: IJob[]
}

const TimeBar: React.FC<Props> = ({ jobs }) => {

  console.log('donde imprime');

  return (
    <div>
      Company name
    </div>
  )
}

export default TimeBar
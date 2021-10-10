import { PageHeader } from 'components/PageHeader';
import IncomingTask from './IncomingTask';
import QuickStats from './QuickStats';

interface Props {}

const Overview = (props: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader title='Overview' description='Welcome' button={false} />
      <QuickStats />
      <IncomingTask />
    </div>
  );
};

export default Overview;

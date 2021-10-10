import { Skeleton } from '@chakra-ui/react';
import { PageHeader } from 'components/PageHeader';
import { useGetEmployeesQuery } from 'generated/graphql';
import ProfileCard from './ProfileCard';

interface Props {}

const Team = (props: Props) => {
  const { loading, data, error } = useGetEmployeesQuery();
  if (error) return <p>Error loading data...</p>;
  return (
    <div className='flex flex-col flex-1 p-10 px-14 font-nunito'>
      <PageHeader
        title='Team'
        description='Employees list'
        buttonName='Add Employee'
        button={true}
        buttonUrl='/team/addemployee'
      />
      <div>
        {loading ? (
          <Skeleton height='400px' borderRadius='10px' />
        ) : (
          <div className='container my-4 mx-auto'>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
              {data?.employees?.map((e) => (
                <ProfileCard employee={e} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;

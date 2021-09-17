//import { useQuery } from '@apollo/client/react';
//import gql from 'graphql-tag';
import {
  //  Query,
  //  Employee,
  //  GetEmployeesQuery,
  useGetEmployeesQuery,
} from 'generated/graphql';

interface Props {}

/*const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      firstName
      lastName
      email
    }
  }
`;
*/
const Team = (props: Props) => {
  //const { loading, error, data } = useQuery<GetEmployeesQuery>(GET_EMPLOYEES);
  const { loading, data, error } = useGetEmployeesQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div>
      <ul>
        {data?.employees?.map((e) => (
          <li key={e?.id}>
            {e?.firstName} {e?.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;

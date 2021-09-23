import { ApolloServer, gql } from 'apollo-server-express';
import { context } from '../../src/context';
import { apolloServerConfig } from '../../src/server';

const GET_ALL_EMPLOYEES = gql`
  query getAllEmployeesQuery {
    employees {
      firstName
      id
      lastName
      pictureUrl
      email
      isAdmin
      phone
      birthDate
      address
      city
      endDate
      startDate
      region
      createdAt
    }
  }
`;

describe('Employee tests', () => {
  let server: ApolloServer;
  const typename = 'Employee';
  server = new ApolloServer(apolloServerConfig);

  afterAll(async () => {
    //context.prisma.employee.deleteMany();
    await context.prisma.$disconnect();
  });
  it('get all employees query should return empty when the db is emplty', async () => {
    const res = await server.executeOperation({
      query: GET_ALL_EMPLOYEES,
    });
    expect(res.data).toBeDefined();
    expect(res.data?.employees).toStrictEqual([]);
  });
  it('create employee mutation: invalid input', async () => {
    expect(true).toBe(false);
  });
  it('create employee mutation: already exists email', async () => {
    expect(true).toBe(false);
  });
  it('create employee mutation: valid input', async () => {
    expect(true).toBe(false);
  });
  it('edit employee mutation: invalid input', async () => {
    expect(true).toBe(false);
  });
  it('edit employee mutation: not existing employee', async () => {
    expect(true).toBe(false);
  });
  it('edit employee mutation: valid input', async () => {
    expect(true).toBe(false);
  });
  it('delete employee mutation: invalid input', async () => {
    expect(true).toBe(false);
  });
  it('delete employee mutation: not existing employee input', async () => {
    expect(true).toBe(false);
  });
  it('delete employee mutation: valid input', async () => {
    expect(true).toBe(false);
  });
  it('get all employees query return array list', async () => {
    expect(true).toBe(false);
  });
});

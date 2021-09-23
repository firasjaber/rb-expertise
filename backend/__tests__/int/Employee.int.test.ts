import { ApolloServer, gql } from 'apollo-server-express';
import { NexusGenInputs } from '../../generated/nexus-typegen';
import { context } from '../../src/context';
import { apolloServerConfig } from '../../src/server';
import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_TO_UPDATE,
  DELETE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from '../config/graphql';

describe('Employee tests', () => {
  let server: ApolloServer;
  server = new ApolloServer(apolloServerConfig);

  afterAll(async () => {
    await context.prisma.employee.deleteMany();
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
    //missing required inputs (eg : lastName,birthDate,startDate,)
    const mockEmployee = {
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      email: 'jhon@gmail.com',
      firstName: 'Jhon',
      phone: '10200300',
    };
    const res = await server.executeOperation({
      query: CREATE_EMPLOYEE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors?.length).toBe(3);
    expect(res.errors?.[0].extensions?.code).toBe('BAD_USER_INPUT');
    expect(res.errors?.[1].extensions?.code).toBe('BAD_USER_INPUT');
    expect(res.errors?.[2].extensions?.code).toBe('BAD_USER_INPUT');
  });
  it('create employee mutation: valid input', async () => {
    const mockEmployee: NexusGenInputs['EmployeeCreateInput'] = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon@gmail.com',
      birthDate: '2001-02-19',
      phone: '10200300',
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      startDate: '2021-12-01',
    };
    const res = await server.executeOperation({
      query: CREATE_EMPLOYEE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    expect(res.data).toBeDefined();
    expect(res.data).toMatchSnapshot();
  });
  it('create employee mutation: already exists email', async () => {
    const mockEmployee: NexusGenInputs['EmployeeCreateInput'] = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon@gmail.com',
      birthDate: '2001-02-19',
      phone: '10200300',
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      startDate: '2021-12-01',
    };
    const res = await server.executeOperation({
      query: CREATE_EMPLOYEE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    expect(res.data).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });
  it('edit employee mutation: invalid input', async () => {
    //create valid employee then test against it
    const mockEmployee: NexusGenInputs['EmployeeCreateInput'] = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon1@gmail.com',
      birthDate: '2001-02-19',
      phone: '10200300',
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      startDate: '2021-12-01',
    };
    const createRes = await server.executeOperation({
      query: CREATE_EMPLOYEE_TO_UPDATE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    // removing firstName and phone from the input so it should return an input error
    const { firstName, phone, ...rest } = createRes.data?.createOneEmployee;
    const udpatedMockEmployee = { ...rest };
    const res = await server.executeOperation({
      query: UPDATE_EMPLOYEE,
      variables: { updateOneEmployeeData: udpatedMockEmployee },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors?.length).toBe(2);
    expect(res.errors?.[0].extensions?.code).toBe('BAD_USER_INPUT');
    expect(res.errors?.[1].extensions?.code).toBe('BAD_USER_INPUT');
    //expect(res.errors).toMatchSnapshot();
  });
  it('edit employee mutation: not existing employee', async () => {
    //create valid employee then test against it
    const mockEmployee: NexusGenInputs['EmployeeCreateInput'] = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon3@gmail.com',
      birthDate: '2001-02-19',
      phone: '10200300',
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      startDate: '2021-12-01',
    };
    const createRes = await server.executeOperation({
      query: CREATE_EMPLOYEE_TO_UPDATE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    const { id, ...rest } = createRes.data?.createOneEmployee;
    const udpatedMockEmployee = { ...rest, id: 1000000, firstName: 'Jhonny', phone: '20400500' };
    const res = await server.executeOperation({
      query: UPDATE_EMPLOYEE,
      variables: { updateOneEmployeeData: udpatedMockEmployee },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });
  it('edit employee mutation: valid input', async () => {
    //create valid employee then test against it
    const mockEmployee: NexusGenInputs['EmployeeCreateInput'] = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon2@gmail.com',
      birthDate: '2001-02-19',
      phone: '10200300',
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      startDate: '2021-12-01',
    };
    const createRes = await server.executeOperation({
      query: CREATE_EMPLOYEE_TO_UPDATE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    const { firstName, phone, ...rest } = createRes.data?.createOneEmployee;
    const udpatedMockEmployee = { ...rest, firstName: 'Jhonny', phone: '20400500' };
    const res = await server.executeOperation({
      query: UPDATE_EMPLOYEE,
      variables: { updateOneEmployeeData: udpatedMockEmployee },
    });
    expect(res.data).toBeDefined();
    expect(res.data).toMatchSnapshot();
  });
  it('delete employee mutation: invalid input', async () => {
    //this mutation needs only id so this shouldnt work
    const res = await server.executeOperation({
      query: DELETE_EMPLOYEE,
      variables: { firstName: 'jhon' },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });
  it('delete employee mutation: not existing employee input', async () => {
    const res = await server.executeOperation({
      query: DELETE_EMPLOYEE,
      variables: { deleteOneEmployeeId: 1000000 },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });
  it('delete employee mutation: valid input', async () => {
    //create valid employee then test against it
    const mockEmployee: NexusGenInputs['EmployeeCreateInput'] = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon4@gmail.com',
      birthDate: '2001-02-19',
      phone: '10200300',
      address: 'Groove street, Earth, 1000',
      city: 'City',
      region: 'Earth',
      startDate: '2021-12-01',
    };
    const createRes = await server.executeOperation({
      query: CREATE_EMPLOYEE_TO_UPDATE,
      variables: { createOneEmployeeData: mockEmployee },
    });
    const { id } = createRes.data?.createOneEmployee;
    const res = await server.executeOperation({
      query: DELETE_EMPLOYEE,
      variables: { deleteOneEmployeeId: id },
    });
    expect(res.data).toBeDefined();
    expect(res.data?.deleteOneEmployee).toBe(true);
  });

  it('get all employees query return array list', async () => {
    const res = await server.executeOperation({
      query: GET_ALL_EMPLOYEES,
    });
    expect(res.data?.employees?.length).toBeGreaterThan(0);
  });
});

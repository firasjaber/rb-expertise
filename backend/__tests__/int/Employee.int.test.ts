import { ApolloServer, gql } from 'apollo-server-express';
import { context } from '../../src/context';
import { apolloServerConfig } from '../../src/server';
import { createTestContext } from '../config/__helpers';

const TEST_QUERY = gql`
  query Query {
    me
  }
`;

describe('tests', () => {
  let server: ApolloServer;
  const typename = 'Employee';
  server = new ApolloServer(apolloServerConfig);

  afterAll(async () => {
    //context.prisma.employee.deleteMany();
    await context.prisma.$disconnect();
  });

  it('testing test', async () => {
    const mockHelloWorld = {
      me: 'hello world',
    };
    const res = await server.executeOperation({
      query: TEST_QUERY,
    });
    expect(res.data).toBeDefined();
    expect(res.data?.me).toBeDefined();
    expect(res.data?.me).toBe(mockHelloWorld.me);
  });
});

import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { context } from './context';
import { schema } from './schema';

export const apolloServerConfig = {
  schema,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
};

export const server = new ApolloServer(apolloServerConfig);

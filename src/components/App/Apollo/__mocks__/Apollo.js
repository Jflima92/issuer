import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './typeDefs';
import ApolloClient from 'apollo-client';

export function createApolloClient(token) {
  // Create GraphQL schema object

  const schema = makeExecutableSchema({ typeDefs });

  // Add mocks
  addMockFunctionsToSchema({ schema });

  // Create network interface
  const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

  // Initialize client
  const client = new ApolloClient({
    networkInterface: mockNetworkInterface,
  });

  return client;
}
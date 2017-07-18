import ApolloClient from 'apollo-client';
import { createNetwork } from './NetworkInterface';
import { createFragmentMatcher } from './IssueFragmentMatcher';


export function createApolloClient(token) {
  const networkInterface = createNetwork(token);
  const fragmentMatcher = createFragmentMatcher();
  const client = new ApolloClient({
    networkInterface: networkInterface,
    fragmentMatcher: fragmentMatcher
  });

  return client;
}


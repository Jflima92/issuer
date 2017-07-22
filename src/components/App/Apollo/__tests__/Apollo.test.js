import { createApolloClient } from '../Apollo'

describe('Apollo', () => {
  it('returns the client', () => {
    const client = createApolloClient('');
    expect(client).toBeDefined();
  });
})
import { createNetworkInterface } from 'apollo-client';

export function createNetwork(token) {
  const networkInterface = createNetworkInterface({
    uri: 'https://api.github.com/graphql',
    opts: {
      credentials: 'same-origin',
    },
  });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }

      // Send the login token in the Authorization header
      req.options.headers.authorization = `Bearer ${token}`;
      next();
    }
  }]);
  return networkInterface;
}
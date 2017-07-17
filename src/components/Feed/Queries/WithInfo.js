import { graphql } from 'react-apollo';
import { GetLastIssues } from './GetLastIssues';

export const WithInfo = graphql(GetLastIssues, {
  options: ({ language }) => {
    return {
      variables: {
        login: language,
      }
    }
  },
});
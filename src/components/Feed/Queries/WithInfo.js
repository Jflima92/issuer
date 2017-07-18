import { graphql } from 'react-apollo';
import { getLastIssues } from './GetLastIssues';

export const withInfo = graphql(getLastIssues, {
  options: ({ language }) => {
    return {
      variables: {
        language: 'javascript',
      }
    }
  },
  props: ({ data }) => {
    if (data.loading) {
      return { loading: true };
    }

    if (data.error) {
      console.error(data.error);
    }

    return { data };
  },
});
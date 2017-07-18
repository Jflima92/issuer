import { gql } from 'react-apollo';

export const getLastIssues = gql`
  query GetLastIssues($language: String!) {
    search(query: $language, type: ISSUE, first: 20) {
      nodes {
        ... on Issue {
          createdAt
          title
          url
          repository {
            url
          }
          author {
            avatarUrl
            url
          }
        }
      }
    }
  }
`;
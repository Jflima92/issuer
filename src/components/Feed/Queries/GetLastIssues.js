import { gql } from 'react-apollo';

export const getLastIssues = gql`
  query GetLastIssues($language: String!) {
    search(query: $language, type: ISSUE, first: 20) {
      nodes {
        ... on Issue {
          createdAt
          title
          body
          url
          repository {
            url
            name
            owner {
              login
            }
          }
          author {
            avatarUrl
            url
            login
          }
        }
      }
    }
  }
`;
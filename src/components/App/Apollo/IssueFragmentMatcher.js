import { IntrospectionFragmentMatcher } from 'react-apollo';

export function createFragmentMatcher() {
  const issueFragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
      __schema: {
        types: [
          {
            kind: "INTERFACE",
            name: "UniformResourceLocatable",
            possibleTypes: [
              {
                "name": "Bot"
              },
              {
                "name": "Issue"
              },
              {
                "name": "MergedEvent"
              },
              {
                "name": "Milestone"
              },
              {
                "name": "Organization"
              },
              {
                "name": "PullRequest"
              },
              {
                "name": "PullRequestCommit"
              },
              {
                "name": "Release"
              },
              {
                "name": "Repository"
              },
              {
                "name": "RepositoryTopic"
              },
              {
                "name": "ReviewDismissedEvent"
              },
              {
                "name": "User"
              }
            ],
          },
        ],
      },
    }
  })
  return issueFragmentMatcher;
}
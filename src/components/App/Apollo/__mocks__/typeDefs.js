export const typeDefs = `
      
      scalar ISSUE
      type Repository {
        url: String
      }

      type Author {
        url: String
        avatarUrl: String
      }

      type Issue {
        createdAt: String
        title: String
        url: String
        repository: Repository
        author: Author
      }

      type Node {
        nodes: [Issue]
      }

      type Query {
        search(query: String, type: ISSUE, first: Int): [Node]
      }

      schema {
        query: Query
      }
    `;
export const typeDefs = `
      
      scalar ISSUE
      
      type Author {
        url: String
        avatarUrl: String
        login: String
      }

      type Repository {
        url: String
        name: String
        owner: Author
      }

      type Issue {
        createdAt: String
        title: String
        url: String
        repository: Repository
        author: Author
        body: String
      }

      type Node {
        nodes: [Issue]
      }

      type Query {
        search(query: String, type: ISSUE, first: Int): Node
      }

      schema {
        query: Query
      }
    `;
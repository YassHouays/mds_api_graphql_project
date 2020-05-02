const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        _id: ID!
        name: String!
        status: String!
    }
  
    type Query {
        getPost(_id: ID!): Post
        getAllPosts: Post
    }
    
    input PostInput {
        name: String!
        status: String!
    }
    
    type Mutation {
        createPost(input: PostInput) : Post
        updatePost(_id: ID!, input: PostInput): Post
        deletePost(_id: ID!) : Post
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`);
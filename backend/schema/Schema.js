import { gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const schema = {
  typeDefs,
  resolvers,
};

export default schema;

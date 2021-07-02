import { gql } from "apollo-server";

const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    cuisine: String!
    borough: String
    address: Address
    grades: [Grade]
  }

  type Address {
    building: String
    street: String!
    zipcode: String!
    coord: [Number]!
  }

  type Grade {
    date: Date
    grade: String
    score: Number
  }

  type Query {
    restaurants: [Restaurant!]!
    restaurant: Restaurant
  }
`;

export default typeDefs;

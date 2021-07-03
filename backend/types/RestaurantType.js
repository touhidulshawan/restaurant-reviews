import { gql } from "apollo-server";

const Restaurant = gql`
  type Address {
    building: String
    street: String
    zipcode: String
  }

  type Restaurant {
    id: ID!
    name: String!
    cuisine: String!
    borough: String
    address: Address
  }

  type Query {
    restaurants: [Restaurant!]!
    restaurant(id: ID!): Restaurant
  }
`;

export default Restaurant;

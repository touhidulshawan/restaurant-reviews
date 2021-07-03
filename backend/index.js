import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { connectDB } from "./db/db.js";
import typeDefs from "./types/RestaurantType.js";
import resolvers from "./resolvers/Resolvers.js";
import log from "./logger/logger.js";

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  connectDB();
  log.info(`🚀 server ready at ${url}`);
});

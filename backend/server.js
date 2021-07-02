import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { connectDB } from "./db/db.js";
import schema from "./schema/Schema.js";
import log from "./logger/logger.js";

dotenv.config();

const server = new ApolloServer(schema);

server.listen().then(({ url }) => {
  connectDB().then(() => log.info("Database connected successfully"));
  log.info(`🚀 server ready at ${url}`);
});

import mongoose from "mongoose";
import log from "../logger/logger.js";

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@restaurant-reviews.vzask.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      poolSize: 50,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    log.error(error);
  }
};

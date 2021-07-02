import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  restaurant_id: { type: String, required: true },
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  borough: { type: String },
  address: {
    building: { type: String },
    street: { type: String },
    zipcode: { type: String },
  },
  grades: [
    {
      date: { type: Date },
      grade: { type: String },
      score: { type: Number },
    },
  ],
});

const Restaurant = mongoose.model("Restaurants", RestaurantSchema);

export default Restaurant;

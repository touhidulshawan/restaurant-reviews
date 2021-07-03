import Restaurant from "../models/RestaurantModel.js";

const resolvers = {
  Query: {
    restaurants: async () => await Restaurant.find({}),
    restaurant: async (_, args) => await Restaurant.findById(args.id),
  },
};

export default resolvers;

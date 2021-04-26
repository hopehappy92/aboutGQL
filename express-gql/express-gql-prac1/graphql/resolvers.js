import User from "../mongoose/models/user";

export const resolvers = {
  Query: {
    async allUser() {
      return await User.find();
    },
  },
  Mutation: {
    async createUser(root, { input }) {
      return await User.create(input);
    },
    async updateUser(root, { id, input }) {
      return await User.findOneAndUpdate({ id }, input, { new: true });
    },
    async deleteUser(root, { name }) {
      return await User.findOneAndDelete({ name });
    },
  },
};

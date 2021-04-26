import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: false,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    id: {
      type: String,
      require: true,
      unique: false,
    },
    password: {
      type: String,
      require: true,
      unique: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("user", UserSchema);

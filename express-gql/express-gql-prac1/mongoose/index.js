import mongoose from "mongoose";

const connect = () => {
  const { MONGO_ID, MONGO_PASSWORD, DB_NAME, NODE_ENV } = process.env;
  const MONGO_URL = `mongodb://${MONGO_ID}:${encodeURIComponent(
    MONGO_PASSWORD
  )}@localhost:27017/admin`;
  if (NODE_ENV !== "development") {
    mongoose.set("debug", true);
  }

  mongoose.connect(
    MONGO_URL,
    {
      dbName: DB_NAME,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log("MongoDB connection failed", error);
      } else {
        console.log("MongoDB connected");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection failed", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("MongoDB connection has been lost. Try again..");
  connect();
});

export default connect;

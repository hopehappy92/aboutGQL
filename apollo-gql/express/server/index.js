const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema.js");

// import express from "express";
// import cors from "cors";
// import { graphqlHTTP } from "express-graphql";
// import schema from "./schema";

const app = express();
const port = 5001;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("listening on", port);
});

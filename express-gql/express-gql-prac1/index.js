import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
dotenv.config({ path: __dirname + "/.env" }); // .env 파일 읽기
import passportConfig from "./passport";
import connect from "./mongoose";

const app = express();
passportConfig();
app.set("port", process.env.PORT || 3000); // application에 port 환경변수 설정하기

connect();

app.get("/", (req, res) => {
  res.json({
    msg: "안녕",
  });
});

app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(app.get("port"), () => {
  console.log(`서버 실행!! 포트는? ${app.get("port")}`);
});

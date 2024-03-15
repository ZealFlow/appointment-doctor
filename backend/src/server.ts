import route from "./routes";
import express from "express";
import dotenv from "dotenv";
import { dataSource } from "./config/dataSource";
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}))

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err)
  })

route(app);

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
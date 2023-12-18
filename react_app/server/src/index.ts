import express from "express";
import router from "./router/router";
import db from "./dbconfig";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

let corsOption = {
  origin: "http://localhost:3000",
};
const app = express();
const port = process.env.PORT;

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.once("open", () => {
  try {
    console.log(`Database connected`);
  } catch (error) {
    console.log(`Something went wrong ... !`);
  }
});

app.listen(port, () => {
  try {
    console.log(`Application is running at Port : ${port}`);
  } catch (error) {
    console.log(`Something went wrong.....!`);
  }
});

app.use("/v1/api", router);

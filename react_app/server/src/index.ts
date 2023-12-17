import express from "express";
import router from "./router/router";
import db from "./dbconfig";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json());

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

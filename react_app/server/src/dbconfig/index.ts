import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB_NAME;

const databaseURL = `${url}/${dbName}`;

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log(`Database connection succussfull at : ${databaseURL}`);
  })
  .catch(() => {
    console.log(`Error in database connection`);
  });

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log(`Database disconnected`);
});

export default db;

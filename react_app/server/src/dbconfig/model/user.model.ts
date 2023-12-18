import { Schema, model } from "mongoose";
import IUser from "../interface/userInterface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    emailID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    dateOfbirth: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const user = model<IUser>("user", userSchema);

export default user;

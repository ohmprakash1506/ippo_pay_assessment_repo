import { Document } from "mongoose";

interface IUser extends Document {
  name: string;
  emailID: string;
  password: string;
  contact: string;
  dateOfbirth: string;
  age: string;
}

export default IUser;

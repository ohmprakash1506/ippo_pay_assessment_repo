import { Document } from "mongoose";

interface IUser extends Document {
  name: string;
  emailID: string;
  contact: string;
  dataOfbirth: string;
  age: string;
}

export default IUser;

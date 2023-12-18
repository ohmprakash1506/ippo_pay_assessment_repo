import user from "../dbconfig/model/user.model";
import { returnError } from "../middlewares/APIResponseHandler";
import httpStatusCode from "http-status-codes";
import bcrypt from "bcrypt";

export default class UserService {
  create = async (data: any) => {
    try {
      const password = data.password;
      const saltRound = 10;
      const encryptPassword = await bcrypt
        .hash(password, saltRound)
        .then((data) => {
          return data;
        });
      const hashedPassword = encryptPassword.toString();
      const userData: any = {
        name: data.name,
        emailID: data.emailID,
        password: hashedPassword,
        contact: data.contact,
        dateOfbirth: data.dateOfBirth,
        age: data.age,
      };
      return await user.create(userData);
    } catch (error) {
      console.log(error);
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong in storing the data`;
      return returnError(status, message);
    }
  };

  getUser = async (data: any) => {
    try {
      const userCheck = await user.findOne({
        _id: data,
      });
      if (userCheck) {
        return await user.find({ _id: data });
      }
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };

  getAllUser = async () => {
    try {
      return await user.find();
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };

  getUserId = async (data: any) => {
    try {
      const id = await user.find({ _id: data });
      if (id) {
        return true;
      }
    } catch (error) {
      const statusCode = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(statusCode, message);
    }
  };

  updateUser = async (id: any, data: any) => {
    try {
      const filter = id;
      const update = data;
      return await user.findByIdAndUpdate(filter, update, { new: true });
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong in update`;
      return returnError(status, message);
    }
  };

  deleteUser = async (id: any) => {
    try {
      const userId = id;
      return user.findByIdAndDelete(userId);
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong in update`;
      return returnError(status, message);
    }
  };
}

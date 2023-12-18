import { Request, Response } from "express";
import httpStatusCode from "http-status-codes";
import { returnSuccess, returnError } from "../middlewares/APIResponseHandler";
import UserService from "../service/user.service";

const userService = new UserService();

export default class User {
  all = async (req: Request, res: Response) => {
    try {
      const data = await userService.getAllUser().then((data) => {
        return data;
      });
      const status = httpStatusCode.OK;
      const message = `Users Listed successfully`;
      const response = data;

      res.json(returnSuccess(status, message, response));
    } catch (error) {
      const message = `Error in retiving User data`;
      const statusCode = httpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const userData = await userService.create(data).then((res) => {
        const response = res;
        if (!response) {
          return `Error in user creation`;
        } else {
          return response;
        }
      });

      const status = httpStatusCode.OK;
      const message = `user Created Successfully`;
      const result: any = userData;
      res.json(returnSuccess(status, message, result));
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Something went wrong`;
      res.json(returnError(status, message));
    }
  };

  update = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  };

  delete = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  };

  deleteAll = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  };
}

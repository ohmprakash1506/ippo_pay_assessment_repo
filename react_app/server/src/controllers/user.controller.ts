import { Request, Response } from "express";
import httpStatusCode from "http-status-codes";
import { returnSuccess, returnError } from "../middlewares/APIResponseHandler";
import UserService from "../service/user.service";
import user from "../dbconfig/model/user.model";

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

  userId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const userData = await userService.getUser(id).then((data: any) => {
        return data;
      });
      const status = httpStatusCode.OK;
      const message = `Users found successfully`;
      const response = userData;
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
      const id = req.params.id;
      const data = req.body;

      const checkUserId = await userService.getUserId(id).then((data) => {
        return data;
      });

      if (!checkUserId) {
        const statusCode = httpStatusCode.FORBIDDEN;
        const message = `invalied user`;
        res.json(returnError(statusCode, message));
      } else {
        const updateRecord = await userService
          .updateUser(id, data)
          .then((data) => {
            return data;
          });

        if (!updateRecord) {
          const statusCode = httpStatusCode.FORBIDDEN;
          const message = `Error in updating record`;
          res.json(returnError(statusCode, message));
        } else {
          const statusCode = httpStatusCode.OK;
          const message = `User details updated successfully`;
          const response = updateRecord;
          res.json(returnSuccess(statusCode, message, response));
        }
      }
    } catch (error) {
      const statusCode = httpStatusCode.BAD_REQUEST;
      const message = `Error in updating user deatils`;
      res.json(returnError(statusCode, message));
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const checkUserId = await userService.getUserId(id).then((data) => {
        return data;
      });

      if (!checkUserId) {
        const statusCode = httpStatusCode.FORBIDDEN;
        const message = `invalied user`;
        res.json(returnError(statusCode, message));
      }

      const user = await userService.deleteUser(id).then((data) => {
        return data;
      });

      if (!user) {
        const statusCode = httpStatusCode.FORBIDDEN;
        const message = `Error in deleting user details`;
        res.json(returnError(statusCode, message));
      } else {
        const statusCode = httpStatusCode.OK;
        const message = `User details deleted successfully`;
        const response = { id: id };
        res.json(returnSuccess(statusCode, message, response));
      }
    } catch (error) {
      const statusCode = httpStatusCode.INTERNAL_SERVER_ERROR;
      const message = `Internal server error`;
      res.json(returnError(statusCode, message));
    }
  };
}

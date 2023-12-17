import { Request, Response } from "express";
import httpStatusCode from "http-status-codes";
import { returnSuccess, returnError } from "../middlewares/APIResponseHandler";

export default class App {
  console = async (req: Request, res: Response) => {
    try {
      const statusCode = httpStatusCode.OK;
      const message = `The Application is up and running....! and database is running in mongodb://localhost:27017/react_app`;
      res.json(returnSuccess(statusCode, message));
    } catch (error) {
      const statusCode = httpStatusCode.BAD_REQUEST;
      const message = `Something went wrong ... !`;
      res.json(returnError(statusCode, message));
    }
  };
}

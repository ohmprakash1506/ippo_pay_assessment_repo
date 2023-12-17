import { Request, Response } from "express";
import httpStatusCode from "http-status-codes";
import { returnSuccess, returnError } from "../middlewares/APIResponseHandler";
import UserService from "../service/user.service";
import user from "../dbconfig/model/user.model";

const userService = new UserService();

export default class User {
  all = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  };

  create = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
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

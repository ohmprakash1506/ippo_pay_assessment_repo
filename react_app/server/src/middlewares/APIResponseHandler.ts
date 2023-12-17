import { APIServiceResponse, loggerResponse } from "../@types/types";
import logger from "./logger";

export const returnSuccess = (
  statusCode: number,
  message: string,
  data?: [] | object
) => {
  const response: APIServiceResponse = {
    statusCode,
    response: {
      status: true,
      message,
      data,
    },
  };

  const log: loggerResponse = {
    statusCode,
    status: true,
    message,
  };

  logger.info(log);
  return response;
};

export const returnError = (statusCode: number, message: string) => {
  const response: APIServiceResponse = {
    statusCode,
    response: {
      status: false,
      message,
    },
  };

  const log: loggerResponse = {
    statusCode,
    status: false,
    message,
  };

  logger.error(log);
  return response;
};

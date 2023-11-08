import { httpCodes } from './httpCodes';
import { logger } from './logger';
import { Request, Response, NextFunction } from 'express';
import { BaseCustomException } from './exceptions/BaseCustomException';

//Нужно больше почитать про errHandler
export function errorHandler(err: BaseCustomException, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.statusCode | httpCodes.INTERNAL_SERVER_ERROR);
  res.send(err.message);
  logger.error(err.message);
}

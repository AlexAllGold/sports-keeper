import { Request, Response, NextFunction } from 'express';
import { httpCodes } from './httpCodes';
import { logger } from './logger';
import { BaseCustomException } from './exceptions/BaseCustomException';

export function errorHandler(err: BaseCustomException, req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    next(err);
  } else {
    logger.error(err.message);
    res.status(err.statusCode || httpCodes.INTERNAL_SERVER_ERROR);
    res.send(err.message);
  }
}

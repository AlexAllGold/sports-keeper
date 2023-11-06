import { httpCodes } from './httpCodes.js';
import { logger } from './logger.js';

// eslint-disable-next-line consistent-return
export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.statusCode || httpCodes.INTERNAL_SERVER_ERROR);
  res.send(err.message);
  logger.error(err.message);
}

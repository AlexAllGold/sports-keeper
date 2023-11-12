import { validateOrReject } from 'class-validator';
import type { NextFunction, Response, Request } from 'express';
import { BadRequestException } from '../utils/exceptions/BadRequestException';

export const validationMiddleware =
  (Dto) =>
  (req: Request, res: Response, next: NextFunction): void => {
    validateOrReject(new Dto(req.body))
      .then(next)
      .catch((error) => {
        next(new BadRequestException(error as string));
      });
  };

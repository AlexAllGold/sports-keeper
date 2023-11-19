import { validateOrReject } from 'class-validator';
import type { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../utils/exceptions/BadRequestException';

export const validationMiddleware = <T>(Dto: T) => (req: Request, res: Response, next: NextFunction): void => {
    const dto = new Dto(req.body);
    validateOrReject(dto)
        .then(next)
        .catch((error) => {
            next(new BadRequestException(error as string));
        });
};

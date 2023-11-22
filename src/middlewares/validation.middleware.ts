import { validateOrReject, ValidationError } from 'class-validator';
import type { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../utils/exceptions/BadRequestException';

type DtoType<T> = new (body: T) => object;

export const validationMiddleware = <T>(Dto: DtoType<T>) => (req: Request, _res: Response, next: NextFunction): void => {
    const dto = new Dto(req.body as T);
    req.body = dto;
    validateOrReject(dto)
        .then(next)
        .catch(([error]: ValidationError[]): void => {
          const [message] = Object.values(error.constraints as Record<string, string>);
            next(new BadRequestException(message));
        });
};

import { validateOrReject } from 'class-validator';
import type { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClubDto } from '../dtos/createClub.dto';

export const validationMiddleware = (Dto: CreateClubDto) => (req: Request, res: Response, next: NextFunction): void => {
const dto = new Dto(req.body) as unknown as CreateClubDto;
    validateOrReject(dto)
        .then(next)
        .catch((error) => {
            next(new BadRequestException(error as string));
        });
};

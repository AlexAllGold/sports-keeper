import { NextFunction, Request, Response } from 'express';

export const wrapperController = (controller: Function) => (req: Request, res: Response, next: NextFunction): void =>
    controller(req, res, next).catch(next);

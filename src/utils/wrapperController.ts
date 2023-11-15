import { NextFunction, Request, Response } from 'express';

export const wrapperController = (controller) => (req: Request, res: Response, next: NextFunction): void =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    controller(req, res, next).catch(next);

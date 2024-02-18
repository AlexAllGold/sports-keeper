import { NextFunction, Request, Response } from 'express';

type ControllerFnType = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const wrapperController = (controller: ControllerFnType): ControllerFnType => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await controller(req, res, next).catch(next);
};

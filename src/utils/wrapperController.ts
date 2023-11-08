import { Express, Request, Response } from 'express';

export const wrapperController = (controller) => (req: Request, res: Response, next: Express) => {
  controller(req, res, next).catch(next);
};

import { httpCodes } from '../utils/httpCodes';
import { clubService } from '../services/clubService';
import { ClubDto } from '../dtos/club.dto';
import { Request, Response } from 'express';

class ClubsControllers {
  async getAll(req: Request, res: Response) {
    const clubs = await clubService.getAll();
    res.status(httpCodes.SUCCESS).json(clubs);
  }

  async getOne(req: Request, res: Response) {
    const club = await clubService.getOne(req.params.clubId);
    res.status(httpCodes.SUCCESS).json(club);
  }

  async create(req: Request, res: Response) {
    const dto = new ClubDto(req.params.clubId, req.body);
    await clubService.create(dto);
    res.status(httpCodes.CREATE).json(req.body);
  }

  async update(req: Request, res: Response) {
    const dto = new ClubDto(req.params.clubId, req.body);
    await clubService.update(dto);
    res.status(httpCodes.ACCEPTED).json(req.body);
  }

  async remove(req: Request, res: Response) {
    await clubService.remove(req.params.clubId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clubsController = new ClubsControllers();

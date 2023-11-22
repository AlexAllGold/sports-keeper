import { Request, Response } from 'express';
import { httpCodes } from '../utils/httpCodes';
import { clubService } from '../services/clubService';
import { UpdateClubDto } from '../dtos/updateClub.dto';
import { CreateClubDto } from '../dtos/createClub.dto';
import { ClubEntity } from '../entities/club.entity';

class ClubsControllers {
  async getAll(_req: Request, res: Response): Promise<void> {
    const clubs: ClubEntity[] = await clubService.getAll();
    res.status(httpCodes.SUCCESS).json(clubs);
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const club: ClubEntity = await clubService.getOne(Number(req.params.clubId));
    res.status(httpCodes.SUCCESS).json(club);
  }

  async create(req: Request, res: Response): Promise<void> {
    const club: ClubEntity = await clubService.create(req.body as CreateClubDto);
    res.status(httpCodes.CREATE).json(club);
  }

  async update(req: Request, res: Response): Promise<void> {
    const club: ClubEntity = await clubService.update(Number(req.params.clubId), req.body as UpdateClubDto);
    res.status(httpCodes.ACCEPTED).json(club);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await clubService.remove(Number(req.params.clubId));
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clubsController: ClubsControllers = new ClubsControllers();

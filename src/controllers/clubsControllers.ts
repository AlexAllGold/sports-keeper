import { Request, Response } from 'express';
import { httpCodes } from '../utils/httpCodes';
import { clubService } from '../services/clubService';
import { UpdateClubDto } from '../dtos/updateClub.dto';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClubDto } from '../dtos/createClub.dto';

class ClubsControllers {
  async getAll(req: Request, res: Response): Promise<void> {
    const clubs = await clubService.getAll();
    res.status(httpCodes.SUCCESS).json(clubs);
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const club = await clubService.getOne(req.params.clubId);
    res.status(httpCodes.SUCCESS).json(club);
  }

  async create(req: Request, res: Response): Promise<void> {
    await clubService.create(req.body as CreateClubDto);
    res.status(httpCodes.CREATE).json(req.body);
  }

  async update(req: Request, res: Response): Promise<void> {
    const clubDto: UpdateClubDto = req.body as UpdateClubDto;
    if (Number(req.params?.clubId) !== Number(clubDto?.id)) {
      throw new BadRequestException('Id Client does not match');
    }
    await clubService.update(req.params.clubId, clubDto);
    res.status(httpCodes.ACCEPTED).json(req.body);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await clubService.remove(req.params.clubId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clubsController: ClubsControllers = new ClubsControllers();

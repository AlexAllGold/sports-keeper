import { Request, Response } from 'express';
import { httpCodes } from '../utils/httpCodes';
import { clubService } from '../services/clubService';
import { CreateClubDto } from '../dtos/createClub.dto';
import { UpdateClubDto } from '../dtos/updateClub.dto';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { validationMiddleware } from '../middlewares/validation.middleware';

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
    const dto = new CreateClubDto(req.body as CreateClubDto);
    await validationMiddleware(dto);
    await clubService.create(dto);
    res.status(httpCodes.CREATE).json(req.body);
  }

  async update(req: Request, res: Response) {
    if (Number(req.params?.clubId) !== Number(req.body?.id)) {
      throw new BadRequestException('Id Client does not match');
    }
    const dto = new UpdateClubDto(req.body as UpdateClubDto);
    await validationMiddleware(dto);
    await clubService.update(req.params.clubId, dto);
    res.status(httpCodes.ACCEPTED).json(req.body);
  }

  async remove(req: Request, res: Response) {
    await clubService.remove(req.params.clubId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clubsController = new ClubsControllers();

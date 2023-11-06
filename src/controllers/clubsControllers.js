import { httpCodes } from '../utils/httpCodes.js';
import { clubService } from '../services/clubService.js';
import { ClubDto } from '../dtos/club.dto.js';

class ClubsControllers {
  async getAll(req, res) {
    const clubs = await clubService.getAll();
    res.status(httpCodes.SUCCESS).json(clubs);
  }

  async getOne(req, res) {
    const club = await clubService.getOne(req.params.clubId);
    res.status(httpCodes.SUCCESS).json(club);
  }

  async create(req, res) {
    const dto = new ClubDto(req.params.clubId, req.body);
    await clubService.create(dto);
    res.status(httpCodes.CREATE).json(req.body);
  }

  async update(req, res) {
    const dto = new ClubDto(req.params.clubId, req.body);
    await clubService.update(dto);
    res.status(httpCodes.ACCEPTED).json(req.body);
  }

  async remove(req, res) {
    await clubService.remove(req.params.clubId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clubsController = new ClubsControllers();

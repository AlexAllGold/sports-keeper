import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clubService } from '../services/clubService.js';
import { bodyParser } from '../utils/bodyParser.js';
import { ClubDto } from '../dtos/club.dto.js';

class ClubsControllers {
  async getAll(res) {
    const clubs = await clubService.getAll();
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(clubs));
  }

  async getOne(res, req, params) {
    const club = await clubService.getOne(params.clubId);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(club));
  }

  async create(res, req) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClubDto(body);
    const club = clubService.create(dto);
    sendResponse(res, httpCodes.SUCCESS, `Club registered! ${club}`);
  }

  async update(res, req, params) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClubDto(body);
    const club = await clubService.update(params.clubId, dto);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(club));
  }

  async remove(res, req, params) {
    const club = await clubService.remove(params.clubId);
    sendResponse(res, httpCodes.SUCCESS, `Club delete! ${club}`);
  }
}

export const clubsController = new ClubsControllers();

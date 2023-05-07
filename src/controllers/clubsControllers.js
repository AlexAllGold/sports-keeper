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

  async create(res, req, params) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClubDto(params.clubId, body);
    await clubService.create(dto);
    sendResponse(res, httpCodes.CREATE, JSON.stringify(body));
  }

  async update(res, req, params) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClubDto(params.clubId, body);
    await clubService.update(dto);
    sendResponse(res, httpCodes.ACCEPTED, JSON.stringify(body));
  }

  async remove(res, req, params) {
    await clubService.remove(params.clubId);
    sendResponse(res, httpCodes.NO_CONTENT);
  }
}

export const clubsController = new ClubsControllers();

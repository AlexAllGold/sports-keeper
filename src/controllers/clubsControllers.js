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

  async createClub(res, req) {
    const body = await bodyParser.parseBody(req);
    const club = new ClubDto(body);
    sendResponse(res, httpCodes.SUCCESS, `Club registered! ${club}`);
  }

  // async update(res, req, params) {
  //   const club = await clubService.getOne(params.clubId);
  //   const body = await bodyParser.parseBody(club);
  //   const dto = new ClubDto(body);
  //   sendResponse(res, httpCodes.SUCCESS, `Club update! ${dto}`);
  // }
}

export const clubsController = new ClubsControllers();

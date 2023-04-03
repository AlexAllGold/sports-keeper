import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clubService } from '../services/clubService.js';
import { bodyParser } from '../utils/bodyParser.js';
import { ClientDto } from '../dtos/сlient.dto.js';

class ClubsControllers {
  async getAll(res) {
    const clubs = await clubService.getAll();
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(clubs));
  }

  getOne(res, params) {
    const message = `Get one! ${params.clubId}`;
    sendResponse(res, httpCodes.SUCCESS, message);
  }

  async createClient(req, res) {
    const body = bodyParser.parser(req);
    const client = new ClientDto(body);
    sendResponse(res, httpCodes.SUCCESS, `Client registered! ${client}`);
  }
}

export const clubsController = new ClubsControllers();

import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clubService } from '../services/clubService.js';
import { bodyParser } from '../utils/bodyParser.js';
import { ClientDto } from '../dtos/сlient.dto.js';
import { InternalServerException } from '../utils/exceptions/InternalServerException.js';

class ClubsControllers {
  async getAll(res) {
    try {
      // const message = 'Get All!';
      const clubs = await clubService.getAll();
      sendResponse(res, httpCodes.SUCCESS, JSON.stringify(clubs));
      // sendResponse(res, httpCodes.SUCCESS, message);
    } catch (err) {
      throw new InternalServerException(err);
    }
  }

  async getOne(res, req, params) {
    try {
      const message = `Get one! ${params.clubId}`;
      // const message = await clubService.getOne(params.clubId);
      sendResponse(res, httpCodes.SUCCESS, message);
    } catch (err) {
      throw new InternalServerException(err);
    }
  }

  async createClient(res, req) {
    try {
      const body = await bodyParser.parseBody(req);
      const client = new ClientDto(body);
      sendResponse(res, httpCodes.SUCCESS, `Client registered! ${client}`);
    } catch (err) {
      throw new InternalServerException(err);
    }
  }
}

export const clubsController = new ClubsControllers();

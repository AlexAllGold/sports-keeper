import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clubService } from '../services/clubService.js';
import { bodyParser } from '../utils/bodyParser.js';
import { ClientDto } from '../dtos/сlient.dto.js';

class ClubsControllers {
  async getAll(res) {
    try {
      const clubs = await clubService.getAll();
      sendResponse(res, httpCodes.SUCCESS, JSON.stringify(clubs));
    } catch (err) {
      throw new Error(`Error in getAll(): ${err.message}`);
    }
  }

  async getOne(res, params) {
    try {
      const message = `Get one! ${params.clubId}`;
      sendResponse(res, httpCodes.SUCCESS, message);
    } catch (err) {
      throw new Error(`Error in getOne(): ${err.message}`);
    }
  }

  async createClient(req, res) {
    try {
      const body = bodyParser.parser(req);
      const client = new ClientDto(body);
      sendResponse(res, httpCodes.SUCCESS, `Client registered! ${client}`);
    } catch (err) {
      throw new Error(`Error in createClient(): ${err.message}`);
    }
  }
}
export const clubsController = new ClubsControllers();

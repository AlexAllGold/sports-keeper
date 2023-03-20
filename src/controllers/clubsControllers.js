import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clubService } from '../services/clubService.js';

class ClubsControllers {
  async getAll(res) {
    const clubs = await clubService.getAll();
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(clubs));
  }

  getOne(res, params) {
    const message = `Get one! ${params.clubId}`;
    sendResponse(res, httpCodes.SUCCESS, message);
  }
}
export const clubsController = new ClubsControllers();

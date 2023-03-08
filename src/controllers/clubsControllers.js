import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clubsService } from '../services/ClubService.js';

class ClubsControllers {
  async getAll(res) {
    const clubs = await clubsService.getAll();
    sendResponse(res, httpCodes.SUCCESS, clubs);
  }

  getOne(res, params) {
    const message = `Get one! ${params.clubId}`;
    sendResponse(res, httpCodes.SUCCESS, message);
  }
}
export const clubsController = new ClubsControllers();

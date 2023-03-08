import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';

class ClubsControllers {
  async getAll(res) {
    const message = 'Hello clubs';
    sendResponse(res, httpCodes.SUCCESS, message);
  }

  getOne(res, params) {
    const message = `Get one! ${params.clubId}`;
    sendResponse(res, httpCodes.SUCCESS, message);
  }
}
export const clubsController = new ClubsControllers();

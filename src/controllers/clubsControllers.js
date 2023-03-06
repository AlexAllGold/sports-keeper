import { httpCodes } from '../utils/httpCodes.js';
import { controllerWrapper } from '../utils/controllerWrapper.js';

class ClubsControllers {
  getAll(res) {
    const message = 'Hello clubs';
    controllerWrapper(res, httpCodes.SUCCESS, message);
  }

  getOne(res, params) {
    const message = `Get one! ${params.clubId}`;
    controllerWrapper(res, httpCodes.SUCCESS, message);
  }
}
export const clubsController = new ClubsControllers();

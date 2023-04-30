import { routes } from './appRoutes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { httpCodes } from '../utils/httpCodes.js';
import { NotFoundException } from '../utils/exceptions/NotFoundException.js';
import { InternalServerException } from '../utils/exceptions/InternalServerException.js';

export const router = (req, res) => {
  const params = {};
  const findRouter = (url, rout) => {
    const urlPath = url.split('/');
    const routPath = rout.split('/');
    let resultPath = '';
    for (let i = 1; i < urlPath.length; i += 1) {
      const currentId = routPath[i];
      resultPath += '/';
      if (currentId !== undefined && currentId.indexOf(':') !== -1 && urlPath[i] !== '') {
        params[currentId.slice(1)] = urlPath[i];
        resultPath += currentId;
      } else {
        resultPath += urlPath[i];
      }
    }
    return resultPath;
  };

  const getController = (url) => routes.find((route) => route.path === findRouter(url, route.path));
  const startRout = async (url) => {
    const controller = getController(url);
    if (!controller) {
      throw new NotFoundException('Not found route');
    }
    await controller.methods[req.method](res, req, params).catch((err) => {
      throw new InternalServerException(err);
    });
  };

  startRout(req.url).catch((err) => {
    sendResponse(res, err.statusCode || httpCodes.INTERNAL_SERVER_ERROR, err.message);
  });
};

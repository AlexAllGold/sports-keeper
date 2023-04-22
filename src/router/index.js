import { routes } from './appRoutes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { httpCodes } from '../utils/httpCodes.js';
import { NotFoundException } from '../utils/exceptions/NotFoundException.js';

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

  const getController = (url) => {
    const currentUrl = findRouter(url, routes[routes.length - 1].path);
    return routes.filter((route) => route.path === currentUrl);
  };

  const startRout = async (url) => {
    const foundRoute = getController(url);
    if (foundRoute.length === 0) {
      throw new NotFoundException('Not found route');
    }
    await foundRoute.at(0).methods[req.method](res, req, params);
  };

  startRout(req.url).catch((err) => {
    sendResponse(res, err.statusCode || httpCodes.INTERNAL_SERVER_ERROR, err.message);
  });
};

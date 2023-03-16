import { routes } from './appRoutes.js';
import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';

export const router = (req, res) => {
  const params = {};

  const glueUrl = ((url, rout) => {
    const urlPath = url.split('/');
    const routPath = rout.split('/');
    let resultPath = '';
    urlPath.forEach((pathUrl) => {
      const currentId = routPath[pathUrl];
      resultPath += '/';
      if (currentId !== undefined && currentId.indexOf(':') !== -1 && pathUrl !== '') {
        params[currentId.slice(1)] = pathUrl;
        resultPath += currentId;
      } else {
        resultPath += pathUrl;
      }
    });
    return resultPath;
  });

  const isPath = ((url) => {
    let flag = false;
    routes.forEach((rout) => {
      const currentUrl = glueUrl(url, rout.path);
      if (rout.path === currentUrl) {
        rout.methods[req.method](res, params);
        flag = true;
      }
    });
    return flag;
  });

  if (!isPath(req.url)) {
    const message = 'Not found';
    sendResponse(res, httpCodes.NOT_FOUND, message);
  }
};

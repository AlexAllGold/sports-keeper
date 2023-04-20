import { routes } from './appRoutes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { httpCodes } from '../utils/httpCodes.js';
import { NotFoundException } from '../utils/exceptions/NotFoundException.js';

export const router = (req, res) => {
  const params = {};
  const glueUrl = (url, rout) => {
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

  const getController = async (url) => {
    let flag = false;
    const currentUrl = glueUrl(url, routes[routes.length - 1].path);
    routes.forEach((route) => {
      if (route.path === currentUrl) {
        route.methods[req.method](res, req, params);
        flag = true;
      }
    });
    return flag;
  };

  const startRout = async (url) => {
    try {
      const foundRoute = await getController(url);
      if (!foundRoute) {
        throw new NotFoundException('No route found');
      }
    } catch (err) {
      sendResponse(res, httpCodes.INTERNAL_SERVER_ERROR, 'Something went wrong');
    }
  };

  startRout(req.url);
};
// const startRout = (url) => {
//   let flag = false;
//   const currentUrl = glueUrl(url, routes[routes.length - 1].path);
//   routes.forEach(async (rout) => {
//     if (rout.path === currentUrl) {
//       flag = true;
//       await rout.methods[req.method](res, req, params);
//     }
//   });
//   if (!flag) {
//     sendResponse(res, httpCodes.NOT_FOUND, 'NotFound');
//   }
// };
// try {
//   const foundController = getController(req);
//   if (!foundController) {
//     throw new NotFoundException(“Url ${req.url} not found”);
//     await foundController(req, res);
//   } catch(err) {
//     sendResponse(res, HttpCode.INTERNAL_SERVER_ERROR, “Something went wrong”);
//   }

import { routes } from './appRoutes.js'
import {httpCodes} from "../utils/httpCodes.js";


export const router = (req, res) => {
    const params = {};

    if (isPath(req.url)) {
    }
    else {
        res.statusCode = httpCodes.NOT_FOUND;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
    //
    function isPath(url) {
        let flag = false;
        routes.forEach(rout => {
            const currentUrl = glueUrl(url, rout.path);
            if (rout.path === currentUrl) {
                    rout.methods[req.method](res, params);
                    flag = true;
            }
        })
        return flag;
    }
    function glueUrl(url, rout) {
        //search id and return glue string
        const urlPath = url.split('/');
        const routPath = rout.split('/');
        let resultPath = '';
        for(let i = 1; i < urlPath.length; i++) {
            resultPath += '/';
                if (routPath[i] === ':clubId' && urlPath[i] !== '') {
                    params.clubId = urlPath[i];
                    resultPath += ':clubId';
                } else {
                    resultPath += urlPath[i];
                }
        }
        return resultPath;
    }
};

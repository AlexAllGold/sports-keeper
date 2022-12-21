import {httpCodes} from "../utils/httpCodes.js";

export class ClubsControllers {
    // crud methods where I can use servicees
    getAll(res) {
        res.statusCode = httpCodes.SUCCESS;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello clubs');
    }
}
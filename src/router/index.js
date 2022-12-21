import { httpCodes } from '../utils/httpCodes.js';
import { ClubsControllers } from '../controllers/clubsControllers.js';
export const router = (req, res) => {
    if(req.method === 'GET' && req.url === '/api/clubs') {
        new ClubsControllers().getAll(res);
    }
    else {
        res.statusCode = httpCodes.NOT_FOUND;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
};

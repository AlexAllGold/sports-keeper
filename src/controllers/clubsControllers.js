import { httpCodes } from '../utils/httpCodes.js';

class ClubsControllers {
  // db = { clubs: [{id: 1},{id: 2},{id: 3} ]}
  // crud methods where I can use services
  getAll(res) {
    res.statusCode = httpCodes.SUCCESS;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello clubs');
  }

  getOne(res, params) {
    // const club = db.clubs.find(item => item.id === params.clubId);
    res.statusCode = httpCodes.SUCCESS;
    res.setHeader('Content-Type', 'application/json');
    res.end(`Get one! ${params.clubId}`);
  }
}
export const clubsController = new ClubsControllers();

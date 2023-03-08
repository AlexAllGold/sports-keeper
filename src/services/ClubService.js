import { database } from '../config/database.js';

export class ClubService {
  getAll() {
    database.query('"SELECT * FROM users"', (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
  }
}
export const clubService = new ClubService();

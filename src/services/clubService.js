import { database } from '../config/database.js';

class ClubService {
  async getAll() {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM clubs', (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }
}
export const clubService = new ClubService();

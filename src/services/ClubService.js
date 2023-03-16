import { database } from '../config/database.js';

class ClubService {
  async getAll() {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM users', (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }
}
export const clubService = new ClubService();

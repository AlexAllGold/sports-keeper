import { database } from '../config/database.js';
import { InternalServerException } from '../utils/exceptions/InternalServerException.js';

class ClubService {
  async getAll() {
    try {
      return new Promise((resolve, reject) => {
        database.query('SELECT * FROM clubs', (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
      });
    } catch (err) {
      throw new InternalServerException(err);
    }
  }

  // async getOne(id) {
  //   const key = id;
  //   return new Promise((resolve, reject) => {
  //     database.query("SELECT * FROM clubs WHERE name = 'Alex'", (err, results) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(results);
  //     });
  //   });
  // }
}
export const clubService = new ClubService();

import { database } from '../config/database.js';
import { InternalServerException } from '../utils/exceptions/InternalServerException.js';

class ClientService {
  async getAll() {
    try {
      return new Promise((resolve, reject) => {
        database.query('SELECT * FROM sports.clients', (err, results) => {
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
}

export const clientService = new ClientService();

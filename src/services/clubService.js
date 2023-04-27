import { database } from '../config/database.js';
import { InternalServerException } from '../utils/exceptions/InternalServerException.js';

class ClubService {
  async getAll() {
    try {
      return new Promise((resolve, reject) => {
        database.query('SELECT * FROM sports.clubs', (err, results) => {
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

  async getOne(id) {
    try {
      return new Promise((resolve, reject) => {
        database.query('SELECT * FROM sports.clubs WHERE id = ?', [id], (err, results) => {
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

  async create(dto) {
    try {
      return new Promise((resolve, reject) => {
        database.query(
          'INSERT INTO sports.clubs (name, description, address) VALUES (?, ?, ?)',
          [dto.name, dto.description, dto.address],
          (err, results) => {
            if (err) {
              reject(err);
            }
            resolve(results);
          },
        );
      });
    } catch (err) {
      throw new InternalServerException(err);
    }
  }

  async update(id, dto) {
    try {
      return new Promise((resolve, reject) => {
        database.query(
          'UPDATE sports.clubs SET name = ?, description = ?, address = ? WHERE id = ?',
          [dto.name, dto.description, dto.address, id],
          (err, results) => {
            if (err) {
              reject(err);
            }
            resolve(results);
          },
        );
      });
    } catch (err) {
      throw new InternalServerException(err);
    }
  }

  async remove(id) {
    try {
      return new Promise((resolve, reject) => {
        database.query('DELETE FROM sports.clubs WHERE id = ?', [id], (err, results) => {
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

export const clubService = new ClubService();

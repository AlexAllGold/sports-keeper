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

  async getOne(id) {
    try {
      return new Promise((resolve, reject) => {
        database.query('SELECT * FROM sports.clients WHERE id = ?', [id], (err, results) => {
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
          'INSERT INTO sports.clients (clubId, firstName, lastName, dateOfBirth, email) VALUES (?, ?, ?, ?, ?)',
          [dto.clubId, dto.firstName, dto.lastName, dto.dateOfBirth, dto.email],
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
          'UPDATE sports.clients SET clubId = ?, firstName = ?, lastName = ?, dateOfBirth = ?, email = ? WHERE id = ?',
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
        database.query('DELETE FROM sports.clients WHERE id = ?', [id], (err, results) => {
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

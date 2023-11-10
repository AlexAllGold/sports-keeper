import { database } from '../config/database';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClientDto } from '../dtos/сreateClient.dto';

class ClientService {
  async getAllByClubId(clubId: string) {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM sports.clients WHERE clubId = ?', [clubId], (err, results) => {
        if (err || (Array.isArray(results) && results.length === 0)) {
          reject(new BadRequestException('Can not find clients from this club'));
        }
        resolve(results);
      });
    });
  }

  async getOne(clubId: string, id: string) {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM sports.clients WHERE clubId = ? AND id = ?', [clubId, id], (err, results) => {
        if (err || (Array.isArray(results) && results.length === 0)) {
          reject(new BadRequestException('Invalid ID from clients'));
        }
        resolve(results[0]);
      });
    });
  }

  async create(dto: CreateClientDto) {
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
  }

  async update(id: string, dto: CreateClientDto) {
    return new Promise((resolve, reject) => {
      database.query(
        'UPDATE sports.clients SET clubId = ?, firstName = ?, lastName = ?, dateOfBirth = ?, email = ? WHERE id = ?',
        [dto.clubId, dto.firstName, dto.lastName, dto.dateOfBirth, dto.email, id],
        (err, results) => {
          if (err || ('affectedRows' in results && results.affectedRows === 0)) {
            reject(new BadRequestException('Invalid ID from clients'));
          }
          resolve(results);
        },
      );
    });
  }

  async remove(clubId: string, id: string) {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM sports.clients WHERE clubId = ? AND id = ?', [clubId, id], (err, results) => {
        if (err || ('affectedRows' in results && results.affectedRows === 0)) {
          reject(new BadRequestException('Can Not Found Client for Remove!'));
        }
        resolve(results);
      });
    });
  }
}

export const clientService = new ClientService();

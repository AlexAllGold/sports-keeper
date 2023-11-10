import { database } from '../config/database';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClubDto } from '../dtos/createClub.dto';

class ClubService {
  async getAll() {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM sports.clubs', (err, results) => {
        if (err) {
          reject(new BadRequestException('Can not find any clubs'));
        }
        resolve(results);
      });
    });
  }

  async getOne(id: string) {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM sports.clubs WHERE id = ?', [id], (err, results) => {
        if (err || (Array.isArray(results) && results.length === 0)) {
          reject(new BadRequestException('Can not find this club'));
        }
        resolve(results[0]);
      });
    });
  }

  async create(dto: CreateClubDto) {
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
  }

  async update(id: string, dto: CreateClubDto) {
    return new Promise((resolve, reject) => {
      database.query(
        'UPDATE sports.clubs SET name = ?, description = ?, address = ? WHERE id = ?',
        [dto.name, dto.description, dto.address, id],
        (err, results) => {
          if (err || ('affectedRows' in results && results.affectedRows === 0)) {
            reject(new BadRequestException('You cannot update'));
          }
          resolve(results);
        },
      );
    });
  }

  async remove(id: string) {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM sports.clubs WHERE id = ?', [id], (err, results) => {
        if (err || ('affectedRows' in results && results.affectedRows === 0)) {
          reject(new BadRequestException('Can Not Found Club for Remove!'));
        }
        resolve(results);
      });
    });
  }
}

export const clubService = new ClubService();

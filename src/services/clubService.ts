import { ResultSetHeader } from 'mysql2';
import { database } from '../config/database';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClubDto } from '../dtos/createClub.dto';
import { ClubEntity } from '../entities/club.entity';

class ClubService {
  async getAll(): Promise<ClubEntity[]> {
    return new Promise((resolve, reject) => {
      database.query<ClubEntity[]>('SELECT * FROM sports.clubs', (err, results) => {
        if (err) {
          reject(new BadRequestException('Can not find any clubs'));
        }
        resolve(results);
      });
    });
  }

  async getOne(id: string): Promise<ClubEntity> {
    return new Promise((resolve, reject) => {
      database.query<ClubEntity[]>('SELECT * FROM sports.clubs WHERE id = ?', [id], (err, results) => {
        if (err || (Array.isArray(results) && results.length === 0)) {
          reject(new BadRequestException('Can not find this club'));
        }
        resolve(results[0]);
      });
    });
  }

  async create(dto: CreateClubDto): Promise<number> {
    return new Promise((resolve, reject) => {
      database.query<ResultSetHeader>(
        'INSERT INTO sports.clubs (name, description, address) VALUES (?, ?, ?)',
        [dto.name, dto.description, dto.address],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results.insertId);
        },
      );
    });
  }

  async update(id: string, dto: CreateClubDto): Promise<void> {
    return new Promise((resolve, reject) => {
      database.query(
        'UPDATE sports.clubs SET name = ?, description = ?, address = ? WHERE id = ?',
        [dto.name, dto.description, dto.address, id],
        (err, results) => {
          if (err || ('affectedRows' in results && results.affectedRows === 0)) {
            reject(new BadRequestException('You cannot update'));
          }
          resolve();
        },
      );
    });
  }

  async remove(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM sports.clubs WHERE id = ?', [id], (err, results) => {
        if (err || ('affectedRows' in results && results.affectedRows === 0)) {
          reject(new BadRequestException('Can Not Found Club for Remove!'));
        }
        resolve();
      });
    });
  }
}

export const clubService = new ClubService();

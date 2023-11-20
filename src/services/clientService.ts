import { ResultSetHeader } from 'mysql2';
import { database } from '../config/database';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClientDto } from '../dtos/сreateClient.dto';
import { ClientEntity } from '../entities/client.entity';

class ClientService {
  async getAllByClubId(clubId: string): Promise<ClientEntity[]> {
    return new Promise((resolve, reject) => {
      database.query<ClientEntity[]>('SELECT * FROM sports.clients WHERE clubId = ?', [clubId], (err, results) => {
        if (err || (Array.isArray(results) && results.length === 0)) {
          reject(new BadRequestException('Can not find clients from this club'));
        }
        resolve(results);
      });
    });
  }

  async getOne(clubId: string, id: string): Promise<ClientEntity> {
    return new Promise((resolve, reject) => {
      database.query<ClientEntity[]>('SELECT * FROM sports.clients WHERE clubId = ? AND id = ?', [clubId, id], (err, results) => {
        if (err || (Array.isArray(results) && results.length === 0)) {
          reject(new BadRequestException('Invalid ID from clients'));
        }
        resolve(results[0]);
      });
    });
  }

  async create(dto: CreateClientDto): Promise<number> {
    return new Promise((resolve, reject) => {
      database.query<ResultSetHeader>(
        'INSERT INTO sports.clients (clubId, firstName, lastName, dateOfBirth, email) VALUES (?, ?, ?, ?, ?)',
        [dto.clubId, dto.firstName, dto.lastName, dto.dateOfBirth, dto.email],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results.insertId);
        },
      );
    });
  }

  async update(id: string, dto: CreateClientDto): Promise<void> {
    return new Promise((resolve, reject) => {
      database.query(
        'UPDATE sports.clients SET clubId = ?, firstName = ?, lastName = ?, dateOfBirth = ?, email = ? WHERE id = ?',
        [dto.clubId, dto.firstName, dto.lastName, dto.dateOfBirth, dto.email, id],
        (err, results) => {
          if (err || ('affectedRows' in results && results.affectedRows === 0)) {
            reject(new BadRequestException('Invalid ID from clients'));
          }
          resolve();
        },
      );
    });
  }

  async remove(clubId: string, id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM sports.clients WHERE clubId = ? AND id = ?', [clubId, id], (err, results) => {
        if (err || ('affectedRows' in results && results.affectedRows === 0)) {
          reject(new BadRequestException('Can Not Found Client for Remove!'));
        }
        resolve();
      });
    });
  }
}

export const clientService = new ClientService();

import mysql from 'mysql';
import { configService } from './ConfigService.js';
import { clubService } from '../services/ClubService.js';

class Database {

pool = mysql.createPool({
  connectionLimit: 10,
  host: configService.getDbHost(),
  user: configService.getDbUser(),
  password: configService.getDbPass(),
}).promise();

  clubService.getAll(pool);
}
export const database = new Database();

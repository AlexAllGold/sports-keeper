import mysql from 'mysql';
import { ConfigService } from './ConfigService.js';
import { ClubService } from '../services/ClubService.js';

const configService = new ConfigService();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: configService.getDbHost(),
  user: configService.getDbUser(),
  password: configService.getDbPass(),
}).promise();

const clubService = new ClubService(pool);
clubService.getAll();
// pool.query('SELECT * FROM clubs', (err, rows) => {
//   if (err) throw err;
//   console.log(`${rows.description}`);
// });

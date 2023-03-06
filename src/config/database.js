import mysql from 'mysql';
import { ConfigService } from './ConfigService.js';

const configService = new ConfigService();

const connection = mysql.createPool({
  host: configService.getDbHost(),
  user: configService.getDbUser(),
  password: configService.getDbPass(),
});

connection.connect();

connection.query('SELECT * FROM clubs', (err, rows) => {
  if (err) throw err;
  console.log(`${rows.description}`);
});

connection.end();

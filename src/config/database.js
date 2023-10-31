import mysql from 'mysql2';
import { configService } from './configService.js';
import { logger } from '../utils/logger.js';

class Database {
  getDb() {
    const pool = mysql.createPool({
      host: configService.getHost(),
      port: Number(configService.getDbPort()),
      user: configService.getDbUser(),
      password: configService.getDbPass(),
      database: configService.getNameDb(),
      connectionLimit: 10,
    });
    pool.getConnection((err, connection) => {
      if (err) {
        logger.info('Error connecting to MySQL:');
      } else {
        logger.info('Connected to MySQL');
        connection.release();
      }
    });
    return pool;
  }
}

export const database = new Database().getDb();

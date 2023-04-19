import mysql from 'mysql';
import { configService } from './configService.js';

class Database {
  getDb() {
    const dbConfig = {
      host: configService.getHost(),
      port: configService.getDbPort(),
      user: configService.getDbUser(),
      password: configService.getDbPass(),
      database: 'sports',
      connectionLimit: 10,
    };

    const db = mysql.createPool(dbConfig);
    return db;
  }
}
export const database = new Database().getDb();

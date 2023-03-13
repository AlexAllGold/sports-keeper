import mysql from 'mysql';
import { configService } from './configService.js';

class Database {
  getDb() {
    const dbConfig = {
      connectionLimit: 10,
      host: configService.getDbHost(),
      user: configService.getDbUser(),
      password: configService.getDbPass(),
    };

    return mysql.createPool(dbConfig);
  }
}
export const database = new Database().getDb();

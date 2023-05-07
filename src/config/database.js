import mysql from 'mysql2';
import { configService } from './configService.js';

class Database {
  getDb() {
    const dbConfig = {
      host: configService.getHost(),
      port: Number(configService.getDbPort()),
      user: configService.getDbUser(),
      password: configService.getDbPass(),
      database: 'sports',
      connectionLimit: 10,
    };
    return mysql.createPool(dbConfig);
  }
}

export const database = new Database().getDb();

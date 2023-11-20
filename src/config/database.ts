import { DataSource } from 'typeorm';
import { configService } from './configService';

  export const database = new DataSource({
  type: 'mysql',
  host: configService.getHost(),
  port: Number(configService.getPort()),
  username: configService.getDbUser(),
  password: configService.getDbPass(),
  database: configService.getNameDb(),
  entities: ['src/entites/*.js'],
  logging: true,
  synchronize: true,
});

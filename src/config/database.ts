import { DataSource, DataSourceOptions } from 'typeorm';
import { configService } from './configService';
import { logger } from '../utils/logger';
import { ClubEntity } from '../entities/club.entity';
import { ClientEntity } from '../entities/client.entity';

export class Database {
  static dataSource: DataSource;

  static {
    const options: DataSourceOptions = {
      type: 'mysql',
      connectorPackage: 'mysql2',
      host: configService.getHost(),
      port: Number(configService.getDbPort()),
      username: configService.getDbUser(),
      password: configService.getDbPass(),
      database: configService.getNameDb(),
      entities: [ClubEntity, ClientEntity],
      migrations: ['migrations/*.ts'],
      logging: true,
      synchronize: true,
    };
    this.dataSource = new DataSource(options);
  }

  static initialize(): void {
    this.dataSource.initialize()
      .then(() => {
        logger.info('Connected to MySQL');
      })
      .catch((err: Error) => {
        logger.error(`Error connecting to MySQL:${err.message}`);
        process.exit(1);
      });
  }
}

export default Database.dataSource;

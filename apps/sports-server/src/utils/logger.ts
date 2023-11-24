import { createLogger } from 'winston';
import * as winston from 'winston';
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
import MySQLTransport from 'winston-mysql';
import { configService } from '../config/configService';

const baseLogger = {
  host: configService.getHost(),
  user: configService.getDbUser(),
  password: configService.getDbPass(),
  database: configService.getNameDb(),
  table: 'loggers',
};

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = (): string => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  new MySQLTransport({ ...baseLogger, level: 'error' }),
];

export const logger = createLogger({
  level: level(),
  levels,
  format,
  transports,
});

import morgan, { StreamOptions } from 'morgan';
import { logger } from '../utils/logger';

const stream: StreamOptions = { write: (message) => logger.http(message) };

const skip = (): boolean => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export const morganMiddleware = morgan('{ :url, :method }, StatusCode: :status [:response-time ms]', {
  stream,
  skip,
});

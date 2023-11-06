import morgan from 'morgan';
import { logger } from '../utils/logger';

const stream = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export const morganMiddleware = morgan('{ :url, :method }, StatusCode: :status [:response-time ms]', {
  stream,
  skip,
});

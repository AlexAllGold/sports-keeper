import express from 'express';
import { router } from './router/routes';
import { errorHandler } from './utils/errorHandler';
import { morganMiddleware } from './middlewares/morgan.middleware';
import { database } from './config/database';
import { logger } from './utils/logger';

export class App {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  bootstrap() {
    database
      .initialize()
      .then(() => {
        logger.info('Data Source has been initialized!');
      })
      .catch((err) => {
        logger.info('Error during Data Source initialization:', err);
      })
    const app = express();
    app.use(express.json());
    app.use('/api', router);
    app.use(morganMiddleware);
    app.use(errorHandler);

    return app;
  }
}

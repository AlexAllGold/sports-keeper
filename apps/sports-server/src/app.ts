import express from 'express';
import cors from 'cors';
import { router } from './router/routes';
import { errorHandler } from './utils/errorHandler';
import { morganMiddleware } from './middlewares/morgan.middleware';
import { Database } from './config/database';

export class App {
  bootstrap(): express.Express {
    Database.initialize();

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/api', router);
    app.use(morganMiddleware);
    app.use(errorHandler);

    return app;
  }
}

import express from 'express';
import { router } from './router/routes';
import { errorHandler } from './utils/errorHandler';
import { morganMiddleware } from './middlewares/morgan.middleware';

export class App {
  bootstrap() {
    const app = express();
    app.use(express.json());
    app.use('/api', router);
    app.use(morganMiddleware);
    app.use(errorHandler);

    return app;
  }
}

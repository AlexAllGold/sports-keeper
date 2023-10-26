import express from 'express';
import { router } from './router/routes.js';
import { errorHandler } from './utils/errorHandler.js';

export class App {
  bootstrap() {
    const app = express();
    app.use(express.json());
    app.use('/api', router);
    app.use(errorHandler);

    return app;
  }
}

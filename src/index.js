import { App } from './app.js';
import { configService } from './config/configService.js';
import { logger } from './utils/logger.js';

const app = new App().bootstrap();
const port = configService.getPort();

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});

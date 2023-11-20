import { App } from './app';
import { configService } from './config/configService';
import { logger } from './utils/logger';

const app = new App().bootstrap();
const port = configService.getPort();

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});

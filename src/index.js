import http from 'http';
import { router } from './router/index.js';
import { ConfigService } from './config/ConfigService.js';

const configService = new ConfigService();

const host = configService.getDbHost();
const port = configService.getPort();
const server = http.createServer(router);

server.listen(port, host, () => {
  console.log(`Sever Working http://${host}:${port}/`);
});

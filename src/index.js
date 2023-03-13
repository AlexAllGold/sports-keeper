import http from 'http';
import { router } from './router/index.js';
import { configService } from './config/configService.js';

const host = configService.getDbHost();
const port = configService.getPort();
const server = http.createServer(router);

server.listen(port, host, () => {
  console.log(`Sever Working http://${host}:${port}/`);
});

import http from 'http';
import { router } from './router/index.js';
import { configService } from './config/configService.js';

const host = configService.getHost();
const port = configService.getPort();
const server = http.createServer(router);

server.listen(port || 5000, host, () => {
  console.log(`Sever Working http://${host}:${port}/`);
});

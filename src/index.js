import http from 'http';
import { router } from './router/index.js';

const host = process.env.LOCALHOST;
const port = process.env.PORT;
const server = http.createServer(router);

server.listen(port, host, () => {
  console.log(`Sever Working http://${host}:${port}/`);
});

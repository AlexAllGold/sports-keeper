import http from 'http';
import { router } from './router/index.js';

const host = 'localhost';
const port = 8000;
const server = http.createServer(router);

server.listen(port, host, () => {
    console.log(`Sever Working http://${host}:${port}/`);
});


import { App } from './app.js';
import { configService } from './config/configService.js';

const app = new App().bootstrap();
const port = configService.getPort();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

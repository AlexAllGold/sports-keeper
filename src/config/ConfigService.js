import 'dotenv/config';
import { httpCodes } from '../utils/httpCodes.js';

export class ConfigService {
  getDbUser() {
    return this.#getEnv('USER_DB');
  }

  getDbPass() {
    return this.#getEnv('PORT');
  }

  getDbHost() {
    return this.#getEnv('HOST_DB');
  }

  getHost() {
    return this.#getEnv('HOST');
  }

  getPort() {
    return this.#getEnv('PORT');
  }

  #getEnv(nameEnv) {
    if (nameEnv !== undefined) {
      console.log(process.env[nameEnv]);
      return process.env[nameEnv];
    }
    // return console.error(`Env ${httpCodes.INTERNAL_SERVER_ERROR} is required!`);
    throw httpCodes.INTERNAL_SERVER_ERROR;
  }
}

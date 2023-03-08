import 'dotenv/config';
import { InternalServerException } from '../exceptions/InternalServerException.js';

class ConfigService {
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
    if (process.env[nameEnv]) {
      return process.env[nameEnv];
    }
    throw new InternalServerException();
  }
}
export const configService = new ConfigService();

import 'dotenv/config';
import { InternalServerException } from '../utils/exceptions/InternalServerException.js';

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
    throw new InternalServerException('Env does not exist');
  }
}
export const configService = new ConfigService();

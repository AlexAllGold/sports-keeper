import 'dotenv/config';
import { InternalServerException } from '../utils/exceptions/InternalServerException';

class ConfigService {
  getDbUser() {
    return this.#getEnv('USER_DB');
  }

  getDbPass() {
    return this.#getEnv('PASS_DB');
  }

  getNameDb() {
    return this.#getEnv('NAME_DB');
  }

  getDbPort() {
    return this.#getEnv('PORT_DB');
  }

  getHost() {
    return this.#getEnv('HOST');
  }

  getPort() {
    return this.#getEnv('PORT');
  }

  #getEnv(nameEnv: string) {
    if (process.env[nameEnv]) {
      return process.env[nameEnv];
    }
    throw new InternalServerException({ message: `Env ${nameEnv} does not exist`, statusCode: 400 });
  }
}
export const configService = new ConfigService();

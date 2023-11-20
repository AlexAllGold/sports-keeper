import 'dotenv/config';
import { InternalServerException } from '../utils/exceptions/InternalServerException';

class ConfigService {
  getDbUser():string | undefined {
    return this.#getEnv('USER_DB');
  }

  getDbPass():string | undefined {
    return this.#getEnv('PASS_DB');
  }

  getNameDb():string | undefined {
    return this.#getEnv('NAME_DB');
  }

  getDbPort():string | undefined {
    return this.#getEnv('PORT_DB');
  }

  getHost():string | undefined {
    return this.#getEnv('HOST');
  }

  getPort():string | undefined {
    return this.#getEnv('PORT');
  }

  #getEnv(nameEnv: string):string | undefined {
    if (process.env[nameEnv]) {
      return process.env[nameEnv];
    }
    throw new InternalServerException(`Env ${nameEnv} does not exist`);
  }
}
export const configService = new ConfigService();

import { BaseExeptions } from './BaseExeptions.js';
import { httpCodes } from '../utils/httpCodes.js';

export class InternalServerException extends BaseExeptions {
  constructor() {
    super('Env does not exist', httpCodes.INTERNAL_SERVER_ERROR);
    this.name = 'InternalServerException';
  }
}

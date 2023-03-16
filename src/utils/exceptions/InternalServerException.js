import { BaseExeptions } from './BaseExeptions.js';
import { httpCodes } from '../httpCodes.js';

export class InternalServerException extends BaseExeptions {
  constructor(message) {
    super(message, httpCodes.INTERNAL_SERVER_ERROR);
    this.name = this.constructor.name;
  }
}

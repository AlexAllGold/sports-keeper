import { BaseExceptions } from './BaseExeptions.js';
import { httpCodes } from '../httpCodes.js';

export class InternalServerException extends BaseExceptions {
  constructor({ message }) {
    super(message, httpCodes.INTERNAL_SERVER_ERROR);
    this.name = this.constructor.name;
  }
}

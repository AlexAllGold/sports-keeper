import { BaseExceptions } from './BaseExeptions.js';
import { httpCodes } from '../httpCodes.js';

export class NotFoundException extends BaseExceptions {
  constructor(message) {
    super(message, httpCodes.NOT_FOUND);
    this.name = this.constructor.name;
  }
}

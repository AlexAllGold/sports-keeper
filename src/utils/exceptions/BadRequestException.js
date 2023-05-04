import { BaseCustomException } from './BaseCustomException.js';
import { httpCodes } from '../httpCodes.js';

export class BadRequestException extends BaseCustomException {
  constructor(message) {
    super(message, httpCodes.BAD_REQUEST);
    this.name = this.constructor.name;
  }
}

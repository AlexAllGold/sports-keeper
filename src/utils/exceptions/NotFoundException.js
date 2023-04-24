import { BaseCustomException } from './BaseCustomException.js';
import { httpCodes } from '../httpCodes.js';

export class NotFoundException extends BaseCustomException {
  constructor(message) {
    super(message, httpCodes.NOT_FOUND);
    this.name = this.constructor.name;
  }
}

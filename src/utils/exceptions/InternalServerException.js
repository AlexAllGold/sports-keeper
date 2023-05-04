import { BaseCustomException } from './BaseCustomException.js';
import { httpCodes } from '../httpCodes.js';

export class InternalServerException extends BaseCustomException {
  constructor({ message, statusCode }) {
    super(message, statusCode || httpCodes.INTERNAL_SERVER_ERROR);
    this.name = this.constructor.name;
  }
}

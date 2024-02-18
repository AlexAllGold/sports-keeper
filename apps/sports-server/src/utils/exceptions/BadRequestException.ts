import { BaseCustomException } from './BaseCustomException';
import { httpCodes } from '../httpCodes';

export class BadRequestException extends BaseCustomException {
  constructor(message: string) {
    super(message, httpCodes.BAD_REQUEST);
    this.name = this.constructor.name;
  }
}

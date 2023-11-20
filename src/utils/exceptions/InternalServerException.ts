import { BaseCustomException } from './BaseCustomException';
import { httpCodes } from '../httpCodes';

export class InternalServerException extends BaseCustomException {
  constructor(message: string) {
    super(message, httpCodes.INTERNAL_SERVER_ERROR);
    this.name = this.constructor.name;
  }
}

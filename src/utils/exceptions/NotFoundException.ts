import { BaseCustomException } from './BaseCustomException';
import { httpCodes } from '../httpCodes';

export class NotFoundException extends BaseCustomException {
  constructor(message: string) {
    super(message, httpCodes.NOT_FOUND);
    this.name = this.constructor.name;
  }
}

import { BaseCustomException, BaseErrorType } from './BaseCustomException';
import { httpCodes } from '../httpCodes';

export class InternalServerException extends BaseCustomException {
  constructor({ message, statusCode }: BaseErrorType) {
    super(message, statusCode || httpCodes.INTERNAL_SERVER_ERROR);
    this.name = this.constructor.name;
  }
}

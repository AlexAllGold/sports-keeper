import { BaseError } from './BaseError.js';

export class InternalServerException extends BaseError {
  constructor(message) {
    super();
    console.error(`Env ${message} doesn't exist`);
  }
}

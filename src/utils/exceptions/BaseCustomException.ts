export interface BaseErrorType {
  message: string;
  statusCode?: string;
}

export class BaseCustomException extends Error {
  statusCode;

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'BaseExceptions';
  }
}

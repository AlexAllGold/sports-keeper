export interface BaseErrorType {
  message: string;
  statusCode?: number;
}
export class BaseCustomException extends Error implements BaseErrorType {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'BaseExceptions';
  }
}

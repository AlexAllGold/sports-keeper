export class BaseExeptions extends Error {
  statusCode;

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'BaseExeptions';
  }
}

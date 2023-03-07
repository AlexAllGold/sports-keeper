export class BaseError extends Error {
  statusCode = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  };

  messageError() {
  }
}

import { validate, validateOrReject, ValidationError } from 'class-validator';
import { logger } from '../utils/logger';
import { NotFoundException } from '../utils/exceptions/NotFoundException';

export async function validationMiddleware(post: object) {
  logger.info(post);
  await validate(post).then((errors: ValidationError[]) => {
    if (errors.length > 0) {
      throw new NotFoundException(errors.toString());
    }
  });

  await validateOrReject(post).catch((errors: ValidationError[]) => {
    throw new NotFoundException(errors.toString());
  });
}

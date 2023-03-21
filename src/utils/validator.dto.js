export class ValidatorDto {
  isNumber(number) {
    if (!Number.isNaN(Number(number))) {
      return number;
    }
    throw new Error('Not a number');
  }

  isString(firstName) {
    try {
      return String(firstName);
    } catch (error) {
      throw new Error('Invalid first name');
    }
  }

  isDate(dateOfBirth) {
    const date = new Date(dateOfBirth.split('-'));
    if (!Number.isNaN(date)) {
      return new Date(date);
    }
    throw new Error('Invalid of date of birth');
  }
}

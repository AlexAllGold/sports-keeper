import { NotFoundException } from './exceptions/NotFoundException.js';

export class Validator {
  isString(name) {
    if (/^[a-zA-Zа-яА-ЯёЁ]{4,50}$/.test(name)) {
      return name;
    }
    throw new NotFoundException('Invalid entered');
  }

  isNumber(number) {
    if (/^[0-9]|\. |,|:*$/.test(number)) {
      return number;
    }
    throw new NotFoundException('Invalid clubID');
  }

  isDate(dateOfBirth) {
    if (/^\d{2}-\d{2}-\d{4}$/.test(dateOfBirth)) {
      return new Date(dateOfBirth);
    }
    throw new NotFoundException('Invalid of date of birth');
  }

  isEmail(email) {
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      return email;
    }
    throw new NotFoundException('Invalid email address');
  }
}

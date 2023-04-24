export class Validator {
  isString(name) {
    if (/^[a-zA-Zа-яА-ЯёЁ]{4,50}$/.test(name)) {
      return name;
    }
    throw new Error('Invalid entered');
  }

  isNumber(number) {
    if (/^[0-9]|\. |,|:*$/.test(number)) {
      return number;
    }
    throw new Error('Not a number');
  }

  isDate(dateOfBirth) {
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateOfBirth)) {
      return dateOfBirth;
    }
    throw new Error('Invalid of date of birth');
  }

  isEmail(email) {
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      return email;
    }
    throw new Error('Invalid email address');
  }
}

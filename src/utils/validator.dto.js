export class ValidatorDto {
  isName(name) {
    if (this.#isMin(name) && this.#isMax(name)) {
      return name;
    }
    throw new Error('Invalid first name or last name');
  }

  isNumber(number) {
    if (!Number.isNaN(Number(number))) {
      return number;
    }
    throw new Error('Not a number');
  }

  isDate(dateOfBirth) {
    const date = new Date(dateOfBirth.split('-'));
    if (!Number.isNaN(date)) {
      return new Date(date);
    }
    throw new Error('Invalid of date of birth');
  }

  isEmail(email) {
    if (/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(email)) {
      return email;
    }
    throw new Error('Invalid email address');
  }

  #isMin(min) {
    if (min.length >= 4) {
      return true;
    }
    throw new Error('Invalid min value');
  }

  #isMax(max) {
    if (max.length <= 50) {
      return true;
    }
    throw new Error('Invalid maximum value');
  }
}

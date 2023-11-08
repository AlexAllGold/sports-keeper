import { NotFoundException } from './exceptions/NotFoundException';
import { BadRequestException } from './exceptions/BadRequestException';

export class Validator {
  isId(clubId: string, id: string) {
    if (clubId && id && Number(clubId) !== Number(id)) {
      throw new BadRequestException('Id not equal to body id');
    }
    return clubId;
  }

  isString(name: string) {
    if (/^[a-zA-Zа-яА-ЯёЁ]{4,50}$/.test(name)) {
      return name;
    }
    throw new NotFoundException('Invalid entered');
  }

  isNumber(number: string) {
    if (/[0-9]|\. |,|:*$/.test(number)) {
      return number;
    }
    throw new NotFoundException('Invalid ID');
  }

  isDate(dateOfBirth: string) {
    const currentDate = new Date().getFullYear();
    if (/^\d{2}-\d{2}-\d{4}$/.test(dateOfBirth) && currentDate - new Date(dateOfBirth).getFullYear() <= 99) {
      return new Date(dateOfBirth);
    }
    throw new NotFoundException('Invalid of date of birth');
  }

  isEmail(email: string) {
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      return email;
    }
    throw new NotFoundException('Invalid email address');
  }
}

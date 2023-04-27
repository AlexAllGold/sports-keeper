import { Validator } from '../utils/validator.js';

export class ClientDto extends Validator {
  clubId;

  firstName;

  lastName;

  dateOfBirth;

  email;

  constructor(client) {
    super();
    this.clubId = this.isNumber(client.clubId);
    this.firstName = this.isString(client.firstName);
    this.lastName = this.isString(client.lastName);
    this.dateOfBirth = this.isDate(client.dateOfBirth);
    this.email = this.isEmail(client.email);
  }
}

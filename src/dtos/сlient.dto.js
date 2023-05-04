import { Validator } from '../utils/validator.js';

export class ClientDto extends Validator {
  id;

  firstName;

  lastName;

  dateOfBirth;

  email;

  clubId;

  constructor(params, client) {
    super();
    this.id = this.isId(params.clientId, client.id);
    this.firstName = this.isString(client.firstName);
    this.lastName = this.isString(client.lastName);
    this.dateOfBirth = this.isDate(client.dateOfBirth);
    this.email = this.isEmail(client.email);
    this.clubId = this.isId(params.clubId, client.clubId);
  }
}

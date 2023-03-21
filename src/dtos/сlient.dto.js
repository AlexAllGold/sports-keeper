import { ValidatorDto } from '../utils/validator.dto.js';

export class ClientDto extends ValidatorDto {
  clubId;

  firstName;

  lastName;

  dateOfBirth;

  email;

  constructor(client) {
    super();
    this.fillingClient(client);
  }

  #addName(name) {
    if (this.lastName.length >= 4 && this.lastName <= 50) {
      return this.isString(name);
    }
    throw new Error('Invalid first name or last name');
  }

  #addEmail(email) {
    if (this.email.length >= 3 && this.email <= 256) {
      return this.isString(email);
    }
    throw new Error('Invalid email');
  }

  fillingClient(client) {
    this.clubId = this.isNumber(client.clubId);
    this.firstName = this.#addName(client.firstName);
    this.lastName = this.#addName(client.lastName);
    this.dateOfBirth = this.isDate(client.dateOfBirth);
    this.email = this.#addEmail(client.email);
  }
}

import { ValidatorDto } from '../utils/validator.dto.js';

export class ClientDto extends ValidatorDto {
  clubId;

  firstName;

  lastName;

  dateOfBirth;

  email;

  constructor(client) {
    super();
    this.clubId = this.isNumber(client.clubId);
    this.firstName = this.isName(client.firstName);
    this.lastName = this.isName(client.lastName);
    this.dateOfBirth = this.isDate(client.dateOfBirth);
    this.email = this.isEmail(client.email);
  }
}

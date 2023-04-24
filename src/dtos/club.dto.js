import { Validator } from '../utils/validator.js';

export class ClubDto extends Validator {
  clubId;

  name;

  address;

  constructor(client) {
    super();
    this.name = this.isString(client.name);
    this.description = this.isString(client.description);
    this.address = this.isString(client.address);
  }
}

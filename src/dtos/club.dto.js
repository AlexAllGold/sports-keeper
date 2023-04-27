import { Validator } from '../utils/validator.js';

export class ClubDto extends Validator {
  clubId;

  name;

  address;

  constructor(club) {
    super();
    this.name = this.isString(club.name);
    this.description = this.isString(club.description);
    this.address = this.isString(club.address);
  }
}

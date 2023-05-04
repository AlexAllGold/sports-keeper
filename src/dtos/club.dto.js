import { Validator } from '../utils/validator.js';

export class ClubDto extends Validator {
  id;

  name;

  description;

  address;

  constructor(clubId, club) {
    super();
    this.id = this.isId(clubId, club.id);
    this.name = this.isString(club.name);
    this.description = this.isString(club.description);
    this.address = this.isString(club.address);
  }
}

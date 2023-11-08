import { Validator } from '../utils/validator';

export class ClubDto extends Validator {
  id: string;

  name: string;

  description: string;

  address: string;

  constructor(clubId: string, club) {
    super();
    this.id = this.isId(clubId, club?.id);
    this.name = this.isString(club.name);
    this.description = this.isString(club.description);
    this.address = this.isString(club.address);
  }
}

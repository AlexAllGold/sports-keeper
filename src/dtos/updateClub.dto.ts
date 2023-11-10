import { CreateClubDto } from './createClub.dto';

export class UpdateClubDto extends CreateClubDto {
  id: string;

  constructor(body: UpdateClubDto) {
    super(body);
    this.id = body?.id;
  }
}

import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateClubDto } from './createClub.dto';

export class UpdateClubDto extends CreateClubDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  constructor(body: UpdateClubDto) {
    super(body);
    this.id = body?.id;
  }
}

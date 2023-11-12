import { IsString, Length } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @Length(4, 50, {
    message: 'The name must have from 4 to 50 characters',
  })
  name: string;

  @IsString()
  @Length(4, 50, {
    message: 'The address must have from 4 to 50 characters',
  })
  address: string;

  @IsString()
  @Length(4, 50, {
    message: 'The description must have from 4 to 50 characters',
  })
  description: string;

  constructor(body: CreateClubDto) {
    this.name = body?.name;
    this.description = body?.description;
    this.address = body?.address;
  }
}

import { IsString, Length } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @Length(4, 50)
  readonly name: string;

  @IsString()
  @Length(4, 50)
  readonly address: string;

  @IsString()
  @Length(4, 50)
  readonly description: string;

  constructor(body: CreateClubDto) {
    this.name = body?.name;
    this.description = body?.description;
    this.address = body?.address;
  }
}

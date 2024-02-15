import { IsDateString, IsEmail, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 50, { message: 'The firstName must have from 4 to 50 characters' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 50, { message: 'The lastName must have from 4 to 50 characters' })
  lastName: string;

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  clubId: number;

  constructor(body: CreateClientDto) {
    this.firstName = body?.firstName;
    this.lastName = body?.lastName;
    this.dateOfBirth = body?.dateOfBirth;
    this.email = body?.email;
    this.clubId = body?.clubId;
  }
}

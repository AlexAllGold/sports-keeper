import { IsEmail, IsString, IsInt, Length, IsDateString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @Length(5, 50, {
    message: 'The firstName must have from 4 to 50 characters',
  })
  firstName: string;

  @IsString()
  @Length(4, 50, {
    message: 'The lastName must have from 4 to 50 characters',
  })
  lastName: string;

  @IsDateString()
  dateOfBirth: Date;

  @IsEmail()
  email: string;

  @IsInt()
  clubId: number;

  constructor(body: CreateClientDto) {
    this.firstName = body?.firstName;
    this.lastName = body?.lastName;
    this.dateOfBirth = body?.dateOfBirth;
    this.email = body?.email;
    this.clubId = body?.clubId;
  }
}

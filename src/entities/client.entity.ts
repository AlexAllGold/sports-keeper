import { RowDataPacket } from 'mysql2';

export interface ClientEntity extends RowDataPacket {
  id: number;
  clubId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
}

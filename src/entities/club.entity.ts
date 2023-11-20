import { RowDataPacket } from 'mysql2';

export interface ClubEntity extends RowDataPacket {
  id: number;
  name: string;
  address: string;
  description: string;
}

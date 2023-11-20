import { Column, Entity } from 'typeorm';

@Entity()
export class ClientsEntity {
  @Column()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  email: string;

  @Column()
  clubId: number;
}

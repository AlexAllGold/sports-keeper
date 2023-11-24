import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClubEntity } from './club.entity';

@Entity({ name: 'clients' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  clubId: number;

  @Column('varchar', { length: 255, nullable: false })
  firstName: string;

  @Column('varchar', { length: 255, nullable: false })
  lastName: string;

  @Column('timestamp')
  dateOfBirth: Date;

  @Column('varchar', { length: 255, nullable: false })
  email: string;

  @ManyToOne(() => ClubEntity, (club: ClubEntity) => club.clients)
  club: ClubEntity;
}

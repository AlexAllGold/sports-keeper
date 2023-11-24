import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity({ name: 'clubs' })
export class ClubEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: false })
  name: string;

  @Column('varchar', { length: 255, nullable: false })
  description: string;

  @Column('varchar', { length: 255, nullable: false })
  address: string;

  @OneToMany(() => ClientEntity, (client: ClientEntity) => client.club)
  clients: ClientEntity[];
}

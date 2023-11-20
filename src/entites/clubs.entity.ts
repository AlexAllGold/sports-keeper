import { Column, Entity } from 'typeorm';

@Entity()
export class ClubsEntity {
    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;
}

import { database } from '../config/database';
import { CreateClubDto } from '../dtos/createClub.dto';
import { ClubsEntity } from '../entites/clubs.entity';

class ClubService {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getAll() {
    const result = await database.getRepository(ClubsEntity).find();
    return result;
  }

  async getOne(id: string) {
    return database.getRepository(ClubsEntity).findOneBy({ id: id });
  }

  async create(dto: CreateClubDto) {
    return database.getRepository(ClubsEntity).save(dto);
  }

  async update(id: string, dto: CreateClubDto) {
    const club = database.getRepository(ClubsEntity).findOneBy({ id });
    database.getRepository(ClubsEntity).merge(club, dto);
    return database.getRepository(ClubsEntity).save(club);
  }

  async remove(id: string) {
    return database.getRepository(ClubsEntity).delete(id);
  }
}

export const clubService = new ClubService();

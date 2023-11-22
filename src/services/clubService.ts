import { Repository } from 'typeorm';
import { Database } from '../config/database';
import { CreateClubDto } from '../dtos/createClub.dto';
import { ClubEntity } from '../entities/club.entity';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { UpdateClubDto } from '../dtos/updateClub.dto';

class ClubService {
  clubRepository: Repository<ClubEntity>;

  constructor() {
    this.clubRepository = Database.dataSource.getRepository(ClubEntity);
  }

  async getAll(): Promise<ClubEntity[]> {
    return this.clubRepository.find();
  }

  async getOne(id: number): Promise<ClubEntity> {
    const club: ClubEntity | null = await this.clubRepository.findOneBy({ id });
    if (club) {
      return club;
    }
    throw new BadRequestException('Can not find this club!');
  }

  async create(dto: CreateClubDto): Promise<ClubEntity> {
    return this.clubRepository.save(dto);
  }

  async update(id: number, dto: UpdateClubDto): Promise<ClubEntity> {
    if (id !== Number(dto.id)) {
      throw new BadRequestException('Id Club does not match');
    }
    const club: ClubEntity = await this.getOne(id);
    this.clubRepository.merge(club, dto);
    return this.clubRepository.save(club);
  }

  async remove(id: number): Promise<void> {
    await this.getOne(id);
    await this.clubRepository.delete(id);
  }
}

export const clubService: ClubService = new ClubService();

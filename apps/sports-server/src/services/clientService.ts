import { Repository } from 'typeorm';
import { BadRequestException } from '../utils/exceptions/BadRequestException';
import { CreateClientDto } from '../dtos/сreateClient.dto';
import { ClientEntity } from '../entities/client.entity';
import { Database } from '../config/database';
import { UpdateClientDto } from '../dtos/updateClient.dto';

class ClientService {
  clientRepository: Repository<ClientEntity>;

  constructor() {
    this.clientRepository = Database.dataSource.getRepository(ClientEntity);
  }

  async getAllByClubId(clubId: number): Promise<ClientEntity[]> {
    return this.clientRepository.findBy({ clubId });
  }

  async getOne(clubId: number, id: number): Promise<ClientEntity> {
    const client: ClientEntity | null = await this.clientRepository.findOneBy({ clubId, id });
    if (client) {
      return client;
    }
    throw new BadRequestException('Can not find this client!');
  }

  async create(params: Record<string, string>, dto: CreateClientDto): Promise<ClientEntity> {
    this.compareIds(Number(params.clubId), dto.clubId);
    return this.clientRepository.save(dto);
  }

  async update(params: Record<string, string>, dto: UpdateClientDto): Promise<ClientEntity> {
    this.compareIds(Number(params.id), dto.id);
    this.compareIds(Number(params.clientId), dto.id);
    const client: ClientEntity = await this.getOne(dto.clubId, dto.id);
    this.clientRepository.merge(client, dto);
    return this.clientRepository.save(client);
  }

  async remove(clubId: number, id: number): Promise<void> {
    await this.getOne(clubId, id);
    await this.clientRepository.delete(id);
  }

  private compareIds(id: number, dtoId: number): void {
    if (id !== Number(dtoId)) {
      throw new BadRequestException('Id Client does not match');
    }
  }
}

export const clientService: ClientService = new ClientService();

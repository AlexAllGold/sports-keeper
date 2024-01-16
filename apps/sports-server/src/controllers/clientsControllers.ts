import { Request, Response } from 'express';
import { httpCodes } from '../utils/httpCodes';
import { clientService } from '../services/clientService';
import { UpdateClientDto } from '../dtos/updateClient.dto';
import { CreateClientDto } from '../dtos/сreateClient.dto';
import { ClientEntity } from '../entities/client.entity';

class ClientsControllers {
  async getAllByClubId(req: Request, res: Response): Promise<void> {
    const clients: ClientEntity[] = await clientService.getAllByClubId(Number(req.params.clubId));
    res.status(httpCodes.SUCCESS).json(clients);
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const client: ClientEntity = await clientService.getOne(Number(req.params.clubId), Number(req.params.clientId));
    res.status(httpCodes.SUCCESS).json(client);
  }

  async create(req: Request, res: Response): Promise<void> {
    const client:ClientEntity = await clientService.create(req.params, req.body as CreateClientDto);
    res.status(httpCodes.CREATE).json(client);
  }

  async update(req: Request, res: Response): Promise<void> {
    const client: ClientEntity = await clientService.update(req.params, req.body as UpdateClientDto);
    res.status(httpCodes.ACCEPTED).json(client);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await clientService.remove(Number(req.params.clubId), Number(req.params.clientId));
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clientsControllers: ClientsControllers = new ClientsControllers();

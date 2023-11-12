import { Request, Response } from 'express';
import { httpCodes } from '../utils/httpCodes';
import { clientService } from '../services/clientService';
import { UpdateClientDto } from '../dtos/updateClient.dto';
import { CreateClientDto } from '../dtos/сreateClient.dto';
import { BadRequestException } from '../utils/exceptions/BadRequestException';

class ClientsControllers {
  async getAllByClubId(req: Request, res: Response): Promise<void> {
    const clients = await clientService.getAllByClubId(req.params.clubId);
    res.status(httpCodes.SUCCESS).json(clients);
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const client = await clientService.getOne(req.params.clubId, req.params.clientId);
    res.status(httpCodes.SUCCESS).json(client);
  }

  async create(req: Request, res: Response): Promise<void> {
    await clientService.create(req.body as CreateClientDto);
    res.status(httpCodes.CREATE).json(req.body);
  }

  async update(req: Request, res: Response): Promise<void> {
    const clientDto = req.body as UpdateClientDto;
    if (Number(req.params?.clientId) !== Number(clientDto?.id)) {
      throw new BadRequestException('Id Client does not match');
    }
    await clientService.update(req.params.clientId, clientDto);
    res.status(httpCodes.ACCEPTED).json(clientDto);
  }

  async remove(req: Request, res: Response): Promise<void> {
    await clientService.remove(req.params.clubId, req.params.clientId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clientsControllers = new ClientsControllers();

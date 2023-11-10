import { Request, Response } from 'express';
import { httpCodes } from '../utils/httpCodes';
import { clientService } from '../services/clientService';
import { UpdateClientDto } from '../dtos/updateClient.dto';
import { CreateClientDto } from '../dtos/сreateClient.dto';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { BadRequestException } from '../utils/exceptions/BadRequestException';

class ClientsControllers {
  async getAllByClubId(req: Request, res: Response) {
    const clients = await clientService.getAllByClubId(req.params.clubId);
    res.status(httpCodes.SUCCESS).json(clients);
  }

  async getOne(req: Request, res: Response) {
    const client = await clientService.getOne(req.params.clubId, req.params.clientId);
    res.status(httpCodes.SUCCESS).json(client);
  }

  async create(req: Request, res: Response) {
    const dto = new CreateClientDto(req.body as CreateClientDto);
    await validationMiddleware(dto);
    await clientService.create(dto);
    res.status(httpCodes.SUCCESS).json(req.body);
  }

  async update(req: Request, res: Response) {
    const dto = new UpdateClientDto(req.body as UpdateClientDto);
    if (Number(req.params?.clientId) !== Number(req.body?.id)) {
      throw new BadRequestException('Id Client does not match');
    }
    await validationMiddleware(dto);
    await clientService.update(req.params.clientId, dto);
    res.status(httpCodes.ACCEPTED).json(dto);
  }

  async remove(req: Request, res: Response) {
    await clientService.remove(req.params.clubId, req.params.clientId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clientsControllers = new ClientsControllers();

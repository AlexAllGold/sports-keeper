import { httpCodes } from '../utils/httpCodes';
import { clientService } from '../services/clientService';
import { ClientDto } from '../dtos/сlient.dto';

class ClientsControllers {
  async getAllByClubId(req, res) {
    const clients = await clientService.getAllByClubId(req.params.clubId);
    res.status(httpCodes.SUCCESS).json(clients);
  }

  async getOne(req, res) {
    const client = await clientService.getOne(req.params.clubId, req.params.clientId);
    res.status(httpCodes.SUCCESS).json(client);
  }

  async create(req, res) {
    const dto = new ClientDto(req.params, req.body);
    await clientService.create(dto, req.params.clubId);
    res.status(httpCodes.SUCCESS).json(req.body);
  }

  async update(req, res) {
    const dto = new ClientDto(req.params, req.body);
    await clientService.update(req.params.clientId, dto);
    res.status(httpCodes.ACCEPTED).json(dto);
  }

  async remove(req, res) {
    await clientService.remove(req.params.clubId, req.params.clientId);
    res.status(httpCodes.NO_CONTENT).end();
  }
}

export const clientsControllers = new ClientsControllers();

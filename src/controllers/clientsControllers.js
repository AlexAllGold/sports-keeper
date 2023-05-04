import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clientService } from '../services/clientService.js';
import { bodyParser } from '../utils/bodyParser.js';
import { ClientDto } from '../dtos/сlient.dto.js';

class ClientsControllers {
  async getAllByClubId(res, req, params) {
    const client = await clientService.getAllByClubId(params.clubId);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async getOne(res, req, params) {
    const client = await clientService.getOne(params.clubId, params.clientId);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async create(res, req, params) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClientDto(params, body);
    await clientService.create(dto, params.clubId);
    sendResponse(res, httpCodes.CREATE, JSON.stringify(dto));
  }

  async update(res, req, params) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClientDto(params, body);
    await clientService.update(params.clientId, dto);
    sendResponse(res, httpCodes.ACCEPTED, JSON.stringify(dto));
  }

  async remove(res, req, params) {
    await clientService.remove(params.clubId, params.clientId);
    sendResponse(res, httpCodes.NO_CONTENT);
  }
}

export const clientsControllers = new ClientsControllers();

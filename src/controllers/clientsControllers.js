import { httpCodes } from '../utils/httpCodes.js';
import { sendResponse } from '../utils/sendResponse.js';
import { clientService } from '../services/clientService.js';
import { bodyParser } from '../utils/bodyParser.js';
import { ClientDto } from '../dtos/сlient.dto.js';

class ClientsControllers {
  async getAll(res) {
    const client = await clientService.getAll();
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async getOne(res, req, params) {
    const client = await clientService.getOne(params.clientId, res);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async create(res, req) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClientDto(body);
    const client = await clientService.create(dto);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async update(res, req, params) {
    const body = await bodyParser.parseBody(req);
    const dto = new ClientDto(body);
    const client = await clientService.update(params.clientId, dto);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async remove(res, req, params) {
    const client = await clientService.remove(params.clientId);
    sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }
}

export const clientsControllers = new ClientsControllers();

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
    const message = `Get one Client! ${params.clientId}`;
    sendResponse(res, httpCodes.SUCCESS, message);
    // const message = await clientService.getOne(params.clientId);
    // sendResponse(res, httpCodes.SUCCESS, JSON.stringify(client));
  }

  async createClient(res, req) {
    const body = await bodyParser.parseBody(req);
    const client = new ClientDto(body);
    sendResponse(res, httpCodes.SUCCESS, `Client registered! ${client}`);
  }
}

export const clientsControllers = new ClientsControllers();

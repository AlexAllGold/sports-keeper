import express from 'express';
import { clubsController } from '../controllers/clubsControllers';
import { clientsControllers } from '../controllers/clientsControllers';
import { wrapperController } from '../utils/wrapperController';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { CreateClubDto } from '../dtos/createClub.dto';
import { UpdateClubDto } from '../dtos/updateClub.dto';
import { CreateClientDto } from '../dtos/сreateClient.dto';
import { UpdateClientDto } from '../dtos/updateClient.dto';

export const router = express.Router();

router.get('/clubs', wrapperController(clubsController.getAll));
router.post('/clubs', validationMiddleware(CreateClubDto), wrapperController(clubsController.create));
router.get('/clubs/:clubId', wrapperController(clubsController.getOne));
router.put('/clubs/:clubId', validationMiddleware(UpdateClubDto), wrapperController(clubsController.update));
router.delete('/clubs/:clubId', wrapperController(clubsController.remove));

router.get('/clubs/:clubId/clients', wrapperController(clientsControllers.getAllByClubId));
router.post('/clubs/:clubId/clients', validationMiddleware(CreateClientDto), wrapperController(clientsControllers.create));
router.get('/clubs/:clubId/clients/:clientId', wrapperController(clientsControllers.getOne));
router.put('/clubs/:clubId/clients/:clientId', validationMiddleware(UpdateClientDto), wrapperController(clientsControllers.update));
router.delete('/clubs/:clubId/clients/:clientId', wrapperController(clientsControllers.remove));

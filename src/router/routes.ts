import express from 'express';
import { clubsController } from '../controllers/clubsControllers';
import { clientsControllers } from '../controllers/clientsControllers';
import { wrapperController } from '../utils/wrapperController';

export const router = express.Router();

router.get('/clubs', wrapperController(clubsController.getAll));
router.post('/clubs', wrapperController(clubsController.create));
router.get('/clubs/:clubId', wrapperController(clubsController.getOne));
router.put('/clubs/:clubId', wrapperController(clubsController.update));
router.delete('/clubs/:clubId', wrapperController(clubsController.remove));

router.get('/clubs/:clubId/clients', wrapperController(clientsControllers.getAllByClubId));
router.post('/clubs/:clubId/clients', wrapperController(clientsControllers.create));
router.get('/clubs/:clubId/clients/:clientId', wrapperController(clientsControllers.getOne));
router.put('/clubs/:clubId/clients/:clientId', wrapperController(clientsControllers.update));
router.delete('/clubs/:clubId/clients/:clientId', wrapperController(clientsControllers.remove));

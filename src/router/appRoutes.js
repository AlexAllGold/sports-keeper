import { clubsController } from '../controllers/clubsControllers.js';
import { clientsControllers } from '../controllers/clientsControllers.js';

export const routes = [
  {
    path: '/api/clubs',
    methods: {
      GET: clubsController.getAll,
      POST: clubsController.createClub,
    },
  },
  {
    path: '/api/clubs/:clubId',
    methods: {
      GET: clubsController.getOne,
      PUT: clubsController.update,
      DELETE: clubsController.remove,
    },
  },
  {
    path: '/api/clubs/:id/clients',
    methods: {
      GET: clientsControllers.getAll,
      POST: clientsControllers.createClient,
    },
  },
  {
    path: '/api/clubs/:clubId/clients/:clientId',
    methods: {
      GET: clientsControllers.getOne,
      PUT: clientsControllers.update,
      DELETE: clientsControllers.remove,
    },
  },
];

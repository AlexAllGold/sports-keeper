import { clubsController } from '../controllers/clubsControllers.js';

export const routes = [
  {
    path: '/api/clubs',
    methods: {
      GET: clubsController.getAll,
      POST: clubsController.setAll,
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
];

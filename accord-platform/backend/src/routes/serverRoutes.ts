import { Router } from 'express';
import { ServerController } from '../controllers/serverController';

const router = Router();
const serverController = new ServerController();

router.get('/servers', serverController.getUserServers.bind(serverController));

export default router;
import { Router } from 'express';
import { ServerController } from '../controllers/serverController';

const router = Router();
const serverController = new ServerController();

router.get('/servers', serverController.getUserServers.bind(serverController));
router.post('/servers/:serverId/alerts', serverController.createAlert.bind(serverController));
router.put('/servers/:serverId/alerts/:alertId', serverController.updateAlert.bind(serverController));
router.delete('/servers/:serverId/alerts/:alertId', serverController.deleteAlert.bind(serverController));

export default router;
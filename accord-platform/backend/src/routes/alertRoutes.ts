import { Router } from 'express';
import { AlertController } from '../controllers/alertController';

const router = Router();
const alertController = new AlertController();

router.post('/alerts', alertController.createAlert);
router.get('/alerts', alertController.getAlerts);
router.put('/alerts/:id', alertController.updateAlert);
router.delete('/alerts/:id', alertController.deleteAlert);

export default router;
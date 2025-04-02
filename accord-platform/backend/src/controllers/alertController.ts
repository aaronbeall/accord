import { Request, Response } from 'express';
import { AlertService } from '../services/alertService';

export class AlertController {
    private alertService: AlertService;

    constructor() {
        this.alertService = new AlertService();
    }

    public async createAlert(req: Request, res: Response): Promise<void> {
        try {
            const alertData = req.body;
            const newAlert = await this.alertService.createAlert(alertData);
            res.status(201).json(newAlert);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async editAlert(req: Request, res: Response): Promise<void> {
        try {
            const alertId = req.params.id;
            const alertData = req.body;
            const updatedAlert = await this.alertService.editAlert(alertId, alertData);
            res.status(200).json(updatedAlert);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteAlert(req: Request, res: Response): Promise<void> {
        try {
            const alertId = req.params.id;
            await this.alertService.deleteAlert(alertId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async listAlerts(req: Request, res: Response): Promise<void> {
        try {
            const alerts = await this.alertService.listAlerts();
            res.status(200).json(alerts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
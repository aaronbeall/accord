import { Request, Response } from 'express';
import { AlertService } from '../services/alertService';
import { getErrorMessage } from '../utils/errorUtils';

export class AlertController {
    private alertService: AlertService;

    constructor() {
        this.alertService = new AlertService();
    }

    public async createAlert(req: Request, res: Response): Promise<void> {
        try {
            const newAlert = await this.alertService.createAlert(req.body);
            res.status(201).json(newAlert);
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }

    public async updateAlert(req: Request<{ id: string }>, res: Response): Promise<void> {
        try {
            const updatedAlert = await this.alertService.updateAlert(req.params.id, req.body);
            res.status(200).json(updatedAlert);
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }

    public async deleteAlert(req: Request<{ id: string }>, res: Response): Promise<void> {
        try {
            await this.alertService.deleteAlert(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }

    public async listAlerts(req: Request, res: Response): Promise<void> {
        try {
            const alerts = await this.alertService.listAlerts();
            res.status(200).json(alerts);
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }

    public async fetchAlerts(req: Request<{ serverId: string }>, res: Response): Promise<void> {
        try {
            const alerts = await this.alertService.fetchAlerts(req.params.serverId);
            res.status(200).json(alerts);
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }
}
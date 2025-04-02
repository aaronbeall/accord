import { Alert, IAlert } from '../models/Alert';
import { getErrorMessage } from '../utils/errorUtils';

export class AlertService {
    public async createAlert(alertData: Partial<IAlert>): Promise<IAlert> {
        try {
            const alert = new Alert(alertData);
            return await alert.save();
        } catch (error) {
            console.error('Error creating alert:', getErrorMessage(error));
            throw new Error(getErrorMessage(error));
        }
    }

    public async updateAlert(alertId: string, updatedData: Partial<IAlert>): Promise<IAlert | null> {
        try {
            return await Alert.findByIdAndUpdate(alertId, updatedData, { new: true });
        } catch (error) {
            console.error('Error updating alert:', getErrorMessage(error));
            throw new Error(getErrorMessage(error));
        }
    }

    public async deleteAlert(alertId: string): Promise<void> {
        try {
            await Alert.findByIdAndDelete(alertId);
        } catch (error) {
            console.error('Error deleting alert:', getErrorMessage(error));
            throw new Error(getErrorMessage(error));
        }
    }

    public async listAlerts(): Promise<IAlert[]> {
        try {
            return await Alert.find();
        } catch (error) {
            console.error('Error listing alerts:', getErrorMessage(error));
            throw new Error(getErrorMessage(error));
        }
    }

    public async fetchAlerts(serverId: string): Promise<IAlert[]> {
        try {
            return await Alert.find({ serverId });
        } catch (error) {
            console.error('Error fetching alerts:', getErrorMessage(error));
            throw new Error(getErrorMessage(error));
        }
    }
}
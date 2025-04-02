import { Client, GatewayIntentBits } from 'discord.js';
import { Alert } from '../models/alertModel'; // Assuming you have an Alert model defined
import { NotificationService } from './notificationService';

export class DiscordService {
    private client: Client;
    private notificationService: NotificationService;

    constructor() {
        this.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
        this.notificationService = new NotificationService();
    }

    public async login(token: string): Promise<void> {
        await this.client.login(token);
    }

    public async getJoinedServers(userId: string): Promise<any[]> {
        const guilds = this.client.guilds.cache.filter(guild => guild.members.cache.has(userId));
        return guilds.map(guild => ({ id: guild.id, name: guild.name }));
    }

    public async createAlert(alertData: any): Promise<void> {
        const alert = new Alert(alertData);
        await alert.save();
    }

    public async editAlert(alertId: string, updatedData: any): Promise<void> {
        await Alert.findByIdAndUpdate(alertId, updatedData);
    }

    public async removeAlert(alertId: string): Promise<void> {
        await Alert.findByIdAndDelete(alertId);
    }

    public async listenForMessages(): Promise<void> {
        this.client.on('messageCreate', async (message) => {
            const alerts = await Alert.find({ serverId: message.guild.id });
            alerts.forEach(alert => {
                if (this.shouldTriggerAlert(alert, message)) {
                    if (alert.playSound) {
                        this.notificationService.playSound(alert.soundFile);
                    }
                    if (alert.showNotification) {
                        this.notificationService.showNotification(alert.message);
                    }
                }
            });
        });
    }

    private shouldTriggerAlert(alert: any, message: any): boolean {
        // Logic to determine if the alert should be triggered based on the message content
        return message.content.includes(alert.triggerWord);
    }
}
import { Client, Intents } from 'discord.js';
import { Alert } from '../models/Alert'; // Adjusted the path to the correct location

export class DiscordService {
    private client: Client;

    constructor() {
        this.client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.MESSAGE_CONTENT] });
    }

    public async login(token: string): Promise<void> {
        await this.client.login(token);
    }

    public async getJoinedServers(userId: string): Promise<any[]> {
        const guilds = this.client.guilds.cache.filter(guild => guild.members.cache.has(userId));
        return guilds.map(guild => ({ id: guild.id, name: guild.name }));
    }

    public async listenForMessages(): Promise<void> {
        this.client.on('messageCreate', async (message) => {
            if (!message.guild) return;
            const alerts = await Alert.find({ serverId: message.guild.id });
            alerts.forEach(alert => {
                if (this.shouldTriggerAlert(alert, message)) {
                    // Removed notificationService logic
                }
            });
        });
    }

    private shouldTriggerAlert(alert: any, message: any): boolean {
        // Logic to determine if the alert should be triggered based on the message content
        return message.content.includes(alert.triggerWord);
    }
}
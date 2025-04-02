import { Client, Message } from 'discord.js';
import { NotificationService } from '../../services/notificationService';
import { DiscordService } from '../../services/discordService';

const notificationService = new NotificationService();
const discordService = new DiscordService();

export const messageCreateHandler = async (client: Client, message: Message) => {
    if (message.author.bot) return;

    const alerts = await discordService.getAlertsForChannel(message.channel.id);
    
    alerts.forEach(alert => {
        if (alert.trigger === 'message' && message.content.includes(alert.keyword)) {
            if (alert.playSound) {
                notificationService.playSound(alert.soundFile);
            }
            if (alert.showNotification) {
                notificationService.showNotification(alert.title, alert.message);
            }
        }
    });
};
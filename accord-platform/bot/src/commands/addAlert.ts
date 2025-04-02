import { CommandInteraction } from 'discord.js';
import { AlertService } from '../services/alertService';
import { NotificationService } from '../services/notificationService';

export const addAlert = async (interaction: CommandInteraction) => {
    const { options } = interaction;
    const serverId = options.getString('server_id');
    const channelId = options.getString('channel_id');
    const alertType = options.getString('alert_type');
    const soundEnabled = options.getBoolean('sound_enabled');
    const notificationEnabled = options.getBoolean('notification_enabled');

    try {
        const alertService = new AlertService();
        const notificationService = new NotificationService();

        const alert = await alertService.createAlert({
            serverId,
            channelId,
            alertType,
            soundEnabled,
            notificationEnabled,
        });

        if (soundEnabled) {
            notificationService.playSound(alert.sound);
        }

        if (notificationEnabled) {
            notificationService.showNotification(alert.message);
        }

        await interaction.reply(`Alert added successfully: ${alert.message}`);
    } catch (error) {
        console.error(error);
        await interaction.reply('There was an error adding the alert. Please try again.');
    }
};
import { CommandInteraction, Client } from 'discord.js';
import { AlertService } from '../services/alertService';

export const listAlerts = async (interaction: CommandInteraction, client: Client) => {
    const userId = interaction.user.id;
    const serverId = interaction.guildId;

    try {
        const alerts = await AlertService.getAlerts(userId, serverId);
        
        if (alerts.length === 0) {
            await interaction.reply('No alerts found for this server.');
            return;
        }

        const alertList = alerts.map(alert => `- ${alert.name} (Sound: ${alert.sound ? 'On' : 'Off'}, Notification: ${alert.notification ? 'On' : 'Off'})`).join('\n');
        
        await interaction.reply(`Here are your alerts:\n${alertList}`);
    } catch (error) {
        console.error('Error fetching alerts:', error);
        await interaction.reply('There was an error fetching your alerts. Please try again later.');
    }
};
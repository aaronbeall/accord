import { CommandInteraction } from 'discord.js';
import { AlertService } from '../services/alertService';

export const removeAlert = async (interaction: CommandInteraction) => {
    const alertId = interaction.options.getString('alert_id');

    if (!alertId) {
        return interaction.reply({ content: 'Please provide a valid alert ID.', ephemeral: true });
    }

    try {
        const result = await AlertService.removeAlert(alertId);

        if (result) {
            return interaction.reply({ content: `Alert with ID ${alertId} has been removed.`, ephemeral: true });
        } else {
            return interaction.reply({ content: `No alert found with ID ${alertId}.`, ephemeral: true });
        }
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'An error occurred while trying to remove the alert.', ephemeral: true });
    }
};
import { Client } from 'discord.js';

export const ready = (client: Client) => {
    console.log(`Logged in as ${client.user?.tag}!`);
    client.user?.setActivity('Listening for alerts', { type: 'LISTENING' });
};
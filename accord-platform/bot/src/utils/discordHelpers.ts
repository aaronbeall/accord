import { Client, GatewayIntentBits } from 'discord.js';

export const createDiscordClient = () => {
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
    });

    return client;
};

export const getJoinedServers = async (client) => {
    const guilds = client.guilds.cache.map(guild => ({
        id: guild.id,
        name: guild.name,
    }));
    return guilds;
};

export const playSound = (soundFilePath) => {
    const audio = new Audio(soundFilePath);
    audio.play();
};

export const sendDesktopNotification = (title, message) => {
    if (Notification.permission === 'granted') {
        new Notification(title, { body: message });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, { body: message });
            }
        });
    }
};
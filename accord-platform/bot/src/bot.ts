import { Client, GatewayIntentBits } from 'discord.js';
import { DiscordService } from './services/discordService';
import { NotificationService } from './services/notificationService';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const discordService = new DiscordService(client);
const notificationService = new NotificationService();

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
    discordService.initializeListeners();
});

client.on('messageCreate', (message) => {
    discordService.handleMessage(message);
});

client.login(process.env.DISCORD_TOKEN);
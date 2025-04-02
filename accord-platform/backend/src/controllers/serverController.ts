import { Request, Response } from 'express';
import { DiscordService } from '../services/discordService';

export class ServerController {
    private discordService: DiscordService;

    constructor() {
        this.discordService = new DiscordService();
    }

    public async getUserServers(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const servers = await this.discordService.getServersForUser(userId);
            res.status(200).json(servers);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving servers', error });
        }
    }
}
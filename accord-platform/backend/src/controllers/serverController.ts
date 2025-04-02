import { Request, Response } from 'express';
import { DiscordService } from '../services/discordService';

export class ServerController {
    private discordService: DiscordService;

    constructor() {
        this.discordService = new DiscordService();
    }

    public async getUserServers(req: Request<{ userId: string }>, res: Response): Promise<void> {
        try {
            const userId = req.params.userId; // Assuming user ID is passed as a route parameter
            const servers = await this.discordService.getJoinedServers(userId);
            res.status(200).json(servers);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving servers', error });
        }
    }
}
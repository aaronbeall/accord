import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { createUser, findUserById } from '../services/userService';
import { getErrorMessage } from '../utils/errorUtils';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export class AuthController {
    async login(req: Request, res: Response) {
        try {
            const { token } = req.body;

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            const userId = payload?.sub;

            if (!userId) {
                throw new Error('User ID is undefined');
            }
            let user = await findUserById(userId);
            if (!user) {
                user = await createUser({
                    id: userId,
                    name: payload?.name,
                    email: payload?.email,
                    picture: payload?.picture,
                });
            }

            res.json({ user });
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }

    async callback(req: Request, res: Response): Promise<void> {
        try {
            const { code } = req.query;

            if (!code) {
                res.status(400).json({ message: 'Authorization code is required' });
                return;
            }

            const { tokens } = await client.getToken(code as string);
            client.setCredentials(tokens);

            const ticket = await client.verifyIdToken({
                idToken: tokens.id_token!,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            const userId = payload?.sub;

            if (!userId) {
                throw new Error('User ID is undefined');
            }

            let user = await findUserById(userId);
            if (!user) {
                user = await createUser({
                    id: userId,
                    name: payload?.name,
                    email: payload?.email,
                    picture: payload?.picture,
                });
            }

            res.json({ user });
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }

    async logout(req: Request, res: Response) {
        try {
            res.status(200).send('Logged out successfully');
        } catch (error) {
            res.status(500).json({ message: getErrorMessage(error) });
        }
    }
}
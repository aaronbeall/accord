import { Notification } from 'electron';
import { join } from 'path';
import { promises as fs } from 'fs';

export class NotificationService {
    private soundPath: string;

    constructor() {
        this.soundPath = join(__dirname, 'sounds'); // Directory for sound files
    }

    async playSound(soundFile: string): Promise<void> {
        const soundFilePath = join(this.soundPath, soundFile);
        try {
            const soundExists = await fs.access(soundFilePath);
            if (soundExists) {
                const audio = new Audio(soundFilePath);
                audio.play();
            }
        } catch (error) {
            console.error('Sound file not found:', error);
        }
    }

    showNotification(title: string, body: string): void {
        const notification = new Notification({ title, body });
        notification.show();
    }

    async handleNotification(alert: { title: string; body: string; sound: string; notify: boolean }): Promise<void> {
        if (alert.notify) {
            this.showNotification(alert.title, alert.body);
        }
        if (alert.sound) {
            await this.playSound(alert.sound);
        }
    }
}
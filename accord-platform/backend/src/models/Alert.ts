import mongoose, { Schema, Document } from 'mongoose';

export interface IAlert extends Document {
    serverId: string;
    triggerWord: string;
    message: string;
    playSound: boolean;
    soundFile?: string;
    showNotification: boolean;
}

const AlertSchema: Schema = new Schema({
    serverId: { type: String, required: true },
    triggerWord: { type: String, required: true },
    message: { type: String, required: true },
    playSound: { type: Boolean, required: true },
    soundFile: { type: String },
    showNotification: { type: Boolean, required: true },
});

export const Alert = mongoose.model<IAlert>('Alert', AlertSchema);

import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    picture?: string;
}

const UserSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
});

export const User = mongoose.model<IUser>('User', UserSchema);

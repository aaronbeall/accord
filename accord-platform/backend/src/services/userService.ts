import { User, IUser } from '../models/User';
import { getErrorMessage } from '../utils/errorUtils';

export const findUserById = async (id: string): Promise<IUser | null> => {
    try {
        return await User.findOne({ id });
    } catch (error) {
        console.error('Error finding user by ID:', getErrorMessage(error));
        throw new Error(getErrorMessage(error));
    }
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
    try {
        const user = new User(userData);
        return await user.save();
    } catch (error) {
        console.error('Error creating user:', getErrorMessage(error));
        throw new Error(getErrorMessage(error));
    }
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
};

export const isValidSoundFile = (filePath: string): boolean => {
    const validExtensions = ['.mp3', '.wav', '.ogg'];
    const fileExtension = filePath.slice(((filePath.lastIndexOf(".") - 1) >>> 0) + 2);
    return validExtensions.includes(fileExtension);
};

export const formatNotificationMessage = (message: string): string => {
    return message.trim().replace(/\s+/g, ' ');
};
# Accord Platform

Accord is a Discord bot and application platform that allows users to create custom notification listeners for their joined Discord servers. With Accord, users can receive alerts based on specific events in their servers, play custom sounds, and display desktop notifications.

## Features

- **Social Login**: Users can log in to the Accord platform using their social media accounts.
- **Server Management**: Users can view a list of Discord servers that the Accord bot has been added to.
- **Custom Alerts**: Users can create, edit, and remove alerts for global, server, or channel-specific events.
- **Notification Settings**: Each alert can be configured to play a custom sound and trigger a desktop notification.

## Project Structure

The Accord platform consists of three main components:

1. **Backend**: The backend service is built with TypeScript and Express. It handles user authentication, server management, and alert management.
   - Located in the `backend` directory.

2. **Frontend**: The frontend is a React application that provides a user interface for managing alerts and server settings.
   - Located in the `frontend` directory.

3. **Bot**: The Discord bot is responsible for listening to events in Discord servers and triggering alerts based on user configurations.
   - Located in the `bot` directory.

## Getting Started

To get started with the Accord platform, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd accord-platform/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Navigate to the bot directory and install dependencies:
   ```
   cd ../bot
   npm install
   ```

5. Set up environment variables for your Discord bot token and any other necessary configurations.

6. Start the backend server:
   ```
   cd ../backend
   npm start
   ```

7. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

8. Start the Discord bot:
   ```
   cd ../bot
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
# Accord Bot Documentation

## Overview
The Accord bot is designed to enhance user experience on Discord by allowing users to create custom notification listeners for their joined servers. Users can configure alerts that trigger sounds and desktop notifications based on specific events.

## Features
- **Social Login**: Users can log in to the Accord platform using their social media accounts.
- **Server Management**: Users can view a list of Discord servers where the Accord bot is active.
- **Alert Configuration**: Users can create, edit, and remove alerts for global, server, or channel-specific events.
- **Custom Notifications**: Each alert can be configured to play a custom sound and display a desktop notification.

## Getting Started
1. **Installation**: Clone the repository and install the necessary dependencies.
   ```
   npm install
   ```

2. **Configuration**: Set up your Discord bot token and any other required environment variables.

3. **Running the Bot**: Start the bot using the following command:
   ```
   npm start
   ```

## Commands
- **Add Alert**: Command to create a new alert.
- **Remove Alert**: Command to delete an existing alert.
- **List Alerts**: Command to display all configured alerts.

## Event Listeners
The bot listens for various events, including:
- **Message Create**: Triggers when a new message is sent in a channel.
- **Ready**: Executes when the bot successfully connects to Discord.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
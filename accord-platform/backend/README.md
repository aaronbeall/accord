# Accord Platform Backend

This is the backend service for the Accord platform, a Discord bot and application that allows users to create custom notification listeners for their joined Discord servers.

## Features

- User authentication via social login.
- List of Discord servers the user has joined.
- Create, edit, and remove alerts for global, server, or channel notifications.
- Configure alerts to play custom sounds and display desktop notifications.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the backend application, initializes the Express app and sets up middleware.
  - **controllers/**: Contains controllers for handling requests.
    - **authController.ts**: Manages user authentication.
    - **serverController.ts**: Manages retrieval of joined servers.
    - **alertController.ts**: Manages alerts creation and management.
  - **routes/**: Contains route definitions for the application.
    - **authRoutes.ts**: Authentication routes.
    - **serverRoutes.ts**: Server-related routes.
    - **alertRoutes.ts**: Alert-related routes.
  - **services/**: Contains services for interacting with external APIs.
    - **discordService.ts**: Interacts with the Discord API.
    - **notificationService.ts**: Handles notifications and sounds.
  - **utils/**: Contains utility functions.
    - **helpers.ts**: General helper functions.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/accord-platform.git
   ```
2. Navigate to the backend directory:
   ```
   cd accord-platform/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run:
```
npm start
```

## API Documentation

Refer to the individual controller files for details on the API endpoints and their usage.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
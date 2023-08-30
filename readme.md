# Discord Bot with TypeScript, MongoDB, and Discord.js v14

This project is a Discord bot built using TypeScript, MongoDB, and Discord.js v14. It was created based on the tutorial "Build a 100 Days of Code Discord Bot with TypeScript, MongoDB, and Discord.js 13" from FreeCodeCamp. Please note that this project uses Discord.js version 14, so there may be some differences from the original tutorial which uses version 13.

## About

This Discord bot serves as a foundation for creating custom bots for your Discord server. It's written in TypeScript, making it easier to maintain and extend with type safety. The bot also uses MongoDB Atlas as its database to store data efficiently.

## Prerequisites

Before you can use this bot, make sure you have the following prerequisites:

1.  **Node.js**: You need Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2.  **MongoDB Atlas**: You should have a MongoDB Atlas account and a database set up. You can sign up for MongoDB Atlas [here](https://www.mongodb.com/cloud/atlas).

3.  **pnpm**: This project uses pnpm as the package manager. You can install it globally using npm with the following command:
        ```bash
    npm install -g pnpm
    ```
    Getting Started

To get started with this Discord bot, follow these steps:

1. Clone this repository and install with pnpm

```
pnpm install
```

2. Rename the .env.example file to .env and fill in your Discord Bot Token and MongoDB Atlas connection string:

```
DISCORD_TOKEN=your_discord_bot_token
MONGODB_URI=your_mongodb_uri
```

3. Build the TypeScript code and start:

```
pnpm run build
```

and then start bot

```
pnpm start
```

import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import dotenv from "dotenv";
import { validEnv } from "./utils/validateEnv";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";

import cors from "cors";
import express from "express";

const server = express();
server.use(cors());
server.use(express.json());

dotenv.config();

async function main() {
    if (!validEnv) return;
    const bot = new Client({ intents: IntentOptions });
    await connectDatabase();
    await bot.login(process.env.BOT_TOKEN);
    bot.on("ready", async () => await onReady(bot));
    bot.on(
        "interactionCreate",
        async (Integration) => await onInteraction(Integration)
    );
}

main();

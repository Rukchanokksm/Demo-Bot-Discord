import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import dotenv from "dotenv";
import { validEnv } from "./utils/validateEnv";
import { onInteraction } from "./events/onInteraction";
dotenv.config();

async function main() {
      if (!validEnv) return;
      const bot = new Client({ intents: IntentOptions });
      await connectDatabase();
      await bot.login(process.env.BOT_TOKEN);
      bot.on("ready", () => console.log("I Connected to discord !!!"));
      bot.on(
            "interactionCreate",
            async (Integration) => await onInteraction(Integration)
      );
}

main();
// (async () => {
// })();

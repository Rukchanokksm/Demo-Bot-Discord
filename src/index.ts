import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import dotenv from "dotenv";
dotenv.config();

(async () => {
      const bot = new Client({ intents: IntentOptions });
      await bot.login(process.env.BOT_TOKEN);
})();

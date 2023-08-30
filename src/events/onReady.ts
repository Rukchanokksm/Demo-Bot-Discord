import { Client } from "discord.js";
import { Routes } from "discord-api-types/v9";
import { REST } from "@discordjs/rest";
import { CommandList } from "../commands/_CommandList";

export const onReady = async (BOT: Client) => {
    const commands = CommandList.map((command) => command.data.toJSON());
    const rest = new REST({ version: "9" }).setToken(
        process.env.BOT_TOKEN as string
    );
    try {
        console.log("Started refreshing application (/) commands.");
        await rest.put(
            Routes.applicationGuildCommands(
                BOT.user?.id || "missing id",
                process.env.GUILD_ID as string
            ),
            {
                body: commands
            }
        );

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }

    console.log("Discord ready!");
};

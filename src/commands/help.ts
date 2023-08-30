import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../interface/Command";

export const help: Command = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Provides information on using this bot."),
    run: async (interaction) => {
        await interaction.deferReply();
        const helpEmbed = new EmbedBuilder()
            .setTitle("100 Days of Code Bot!")
            .addFields([
                {
                    name: "Create today's update",
                    value: "Use the `/100` command to create your update for today. The `message` will be displayed in your embed."
                },
                {
                    name: "Edit today's update",
                    value: "Do you see a typo in your embed? Right click it and copy the ID (you may need developer mode on for this), and use the `/edit` command to update that embed with a new message."
                },
                {
                    name: "Show your progress",
                    value: "To see your current progress in the challenge, and the day you last checked in, use `/view`."
                }
            ])
            .setFooter({ text: `Version ${process.env.npm_package_version}` });
        await interaction.editReply({
            embeds: [helpEmbed]
        });
        return;
    }
};

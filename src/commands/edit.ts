import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interface/Command";

export const edit: Command = {
    data: new SlashCommandBuilder()
        .setName("edit")
        .setDescription("Edit a previous 100 days of code post")
        .addStringOption((option) =>
            option
                .setName("embed-id")
                .setDescription("ID of the massage to edit.")
                .setRequired(true)
        )
        .addStringOption((otion) =>
            otion
                .setName("message")
                .setDescription(
                    "the message to go in your 100 Days of Code update"
                )
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply();
        const { channel, user } = interaction;
        if (!channel) {
            await interaction.editReply({
                content: "Missing Chanel parameter"
            });
            return;
        }
        const targetId = interaction.options.get("embed-id", true).message?.id;
        const text = interaction.options.get("message", true).message?.toString;
        if (!targetId) {
            await interaction.editReply({
                content: "Cann't Found Embed id"
            });
            return;
        }
        const targetMessage = channel.messages.fetch(targetId);
        if (!targetMessage) {
            await interaction.editReply({
                content:
                    "That does not appear to be a valid message ID. Be sure that you are using this command in the same channel as the message."
            });
            return;
        }
        const targetEmbed = (await targetMessage).embeds[0];
        if (targetEmbed.author?.name !== user.tag) {
            await interaction.editReply({
                content:
                    "This does not appear to be your 100 Days of Code post. You cannot edit it."
            });
            return;
        }
        if (!text) {
            await interaction.editReply({
                content: "Can't get some text of edit post"
            });
        }
        targetEmbed.description;
        (await targetMessage).edit({
            embeds: [targetEmbed]
        });
        await interaction.editReply({
            content: "updated!"
        });
    }
};

import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../interface/Command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperdata } from "../modules/updateCamperData";

export const onehHunDred: Command = {
    data: new SlashCommandBuilder()
        .setName("100")
        .setDescription("Check in for the 100 Days of Code challenge.")
        .addStringOption((option) =>
            option
                .setName("message")
                .setDescription(
                    "The message to go in your 100 Days of Code update."
                )
                .setRequired(true)
                .addChoices({
                    name: "100",
                    value: "message_100"
                })
        ),
    run: async (interaction) => {
        await interaction.deferReply();
        const { user } = interaction;
        const text = interaction.options.get("message", true).value?.toString();
        const targetCamper = await getCamperData(user.id);
        const updateCamper = await updateCamperdata(targetCamper);

        const onehHunDredEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Test bot 100 days naja !!")
            .setDescription("text" + text)
            .setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL()
            })
            .addFields([
                {
                    name: "Round",
                    value: updateCamper.round.toString(),
                    inline: true
                },
                {
                    name: "Day",
                    value: updateCamper.day.toString(),
                    inline: true
                }
            ])
            .setFooter({
                text:
                    "Day completed: " +
                    new Date(updateCamper.timestamp).toLocaleDateString()
            });

        await interaction.editReply({ embeds: [onehHunDredEmbed] });
    }
};

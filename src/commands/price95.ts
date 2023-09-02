import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../interface/Command";
import { oliPrice95 } from "../api/oilprice95";

export const price95: Command = {
    data: new SlashCommandBuilder()
        .setName("price95")
        .setDescription("Price oli 95 today."),
    run: async (interaction) => {
        await interaction.deferReply();
        const reso = await oliPrice95();
        let isoliName = "";
        let isPirce = 0;
        if (!reso?.OilName) {
            isoliName = "Not found naja";
        } else {
            isoliName = reso.OilName;
        }
        if (!reso?.PriceToday) {
            isPirce = 0;
        } else {
            isPirce = reso.PriceToday;
        }
        const priceEmbed = new EmbedBuilder()
            .setTitle("PriceToday")
            .addFields([
                {
                    name: "Name oli",
                    value: `${isoliName}`
                },
                {
                    name: "Today oliprice for gassohole 95",
                    value: `${isPirce}`
                }
            ])
            .setFooter({ text: `Version ${process.env.npm_package_version}` });
        await interaction.editReply({
            embeds: [priceEmbed]
        });
    }
};

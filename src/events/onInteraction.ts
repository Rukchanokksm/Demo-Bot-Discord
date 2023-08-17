import { Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onInteraction = async (interAction: Interaction) => {
      if (interAction.isCommand()) {
            for (const Command of CommandList) {
                  if (interAction.commandName === Command.data.name) {
                        await Command.run(interAction);
                        break;
                  }
                  console.log("Wrong Command !!!");
            }
      }
};

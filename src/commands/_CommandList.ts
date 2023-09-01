import { Command } from "../interface/Command";
import { edit } from "./edit";
import { help } from "./help";
import { onehHunDred } from "./oneHunDrad";
import { View } from "./view";

export const CommandList: Command[] = [onehHunDred, edit, help, View];

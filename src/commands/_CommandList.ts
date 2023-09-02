import { Command } from "../interface/Command";
import { edit } from "./edit";
import { help } from "./help";
import { onehHunDred } from "./oneHunDrad";
import { price95 } from "./price95";
import { View } from "./view";

export const CommandList: Command[] = [onehHunDred, edit, help, View, price95];

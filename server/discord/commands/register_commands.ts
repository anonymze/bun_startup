import { ENV } from "../../../env";
import { REST, Routes } from "discord.js";
import { type CommandsDiscord, commandsDiscord } from "./commands";

/** EVERY COMMANDS WILL BE REGISTERED HERE, AND YOU NEED TO TELL DISCORD ABOUT THEM (launch command register in package.json) **/

const rest = new REST({ version: "10" }).setToken(ENV.DISCORD_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(ENV.DISCORD_APPLICATION_ID), { body: commandsDiscord });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}

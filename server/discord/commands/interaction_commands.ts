import { Events } from "discord.js";
import { discordClientInstance } from "../bot";

/** COMMANDS REGISTERED WILL BE INTERACTED HERE **/

// interac with commands
discordClientInstance.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping_pong") {
    await interaction.reply("Pong!");
    return;
  }

  await interaction.reply("Bot is running! BUT NO COMMANDS FOUND");
  return;
});

// interac with actions
discordClientInstance.on(Events.UserUpdate, async (oldUser, newUser) => {
  if (oldUser.avatarURL === newUser.avatarURL) return;

  const channel = await discordClientInstance.channels.fetch("channel_id");

  if (!channel || !channel.isTextBased()) return;

  await channel.send("User updated avatar!");
});

import { instanceClientDiscord } from "../bot";

/** COMMANDS REGISTERED WILL BE INTERACTED HERE **/

// interac with commands
instanceClientDiscord.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping_pong') {
      await interaction.reply('Pong!');
      return;
    }

    await interaction.reply('Bot is running! BUT NO COMMANDS FOUND');
    return;
});
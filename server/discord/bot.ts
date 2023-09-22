import { ENV } from '../../env';
import {Client, Events, GatewayIntentBits} from 'discord.js';

/** SET INSTANCE CLIENT DISCORD HERE */

// create a new Client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

// listen for the client to be ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// login with the token from .env.local
client.login(ENV.DISCORD_TOKEN);

export { client as discordClientInstance };
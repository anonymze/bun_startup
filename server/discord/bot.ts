<<<<<<< HEAD
import { ENVOU } from '../../env';
import {Client, Events, GatewayIntentBits} from 'discord.js';
=======
import { ENV } from "../../env";
import { Client, Events, GatewayIntentBits } from "discord.js";
>>>>>>> 2776cf8b21fe6592609ca809493e1117c87af682

/** SET INSTANCE CLIENT DISCORD HERE */

// create a new Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// listen for the client to be ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// login with the token from .env.local
client.login(ENV.DISCORD_TOKEN);

export { client as discordClientInstance };

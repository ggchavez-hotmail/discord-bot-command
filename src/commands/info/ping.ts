/*import { client } from "../..";
import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "replies with pong",
    run: async ({ interaction }) => {
        interaction.followUp({
            content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
              Date.now() - interaction.createdTimestamp
            }ms`,
          });
    }
});
*/
import fetch from "node-fetch";
import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "joke your mama it's...",
    run: async ({ interaction }) => {
        
        const resultado = await fetch("https://api.yomomma.info/").then((response) => response.json());

        interaction.followUp({
            content: `Broma:  + ${resultado.joke}`
          });
    }
});

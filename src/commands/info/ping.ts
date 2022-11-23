import { client } from "../..";
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
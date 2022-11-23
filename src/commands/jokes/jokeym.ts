import fetch from "node-fetch";
import { Command } from "../../structures/Command";

export default new Command({
    name: "jokeym",
    description: "joke your mama it's...",
    run: async ({ interaction }) => {
        
        const resultado = await fetch("https://api.yomomma.info/").then((response) => response.json());

        interaction.followUp({
            content: `Joke: ${resultado.joke}`
          });
    }
});

import fetch from "node-fetch";
import { Command } from "../../structures/Command";

export default new Command({
    name: "jokechuck",
    description: "joke your mama it's...",
    run: async ({ interaction }) => {
        
        const resultado = await fetch("https://api.chucknorris.io/jokes/random").then((response) => response.json());

        interaction.followUp({
            content: `Joke: ${resultado.value}`
          });
    }
});

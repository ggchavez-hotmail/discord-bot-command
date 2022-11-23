//import fetch from "node-fetch";
import { Command } from "../../structures/Command";
import * as animals from "random-animals-api";

export default new Command({
    name: "acat",
    description: "ramdom cat's picture",
    run: async ({ interaction }) => {
        try {
            const resultado = await animals.cat();
            console.log(resultado);  
            interaction.reply({
                content: "...otro gato" , files: [resultado]
            }); 
        } catch (error) {
            console.log("error: " + error);  
            interaction.followUp({
                content: "la rompiste mi ciela" 
            });
        }
        /*
        const resultado = await fetch("https://api.yomomma.info/").then((response) => response.json());
*/
        
    }
});

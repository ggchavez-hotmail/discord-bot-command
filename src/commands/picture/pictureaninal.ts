//import fetch from "node-fetch";
import { Command } from "../../structures/Command";
import * as randomAnimals from "random-animals-api";

import importToArray from "import-to-array";
import randomItemInArray from "random-item-in-array";

export default new Command({
    name: "pictureaninal",
    description: "ramdom animal's picture",
    run: async ({ interaction }) => {
        try {
            //Se importa las funciones en un array de objetos
            const animals = importToArray(randomAnimals);
            //console.log(animals);

            //Se selecciona uno de los items del
            const randomAnimal = randomItemInArray(animals);
            //console.log(randomAnimal);
            
            //Se utiliza la funcion
            const randomURlAnimal = await randomAnimal();
            console.log(randomURlAnimal);

            //forma original, llamando un metodo
            //const resultado = await randomAnimals.panda();
            //console.log(resultado);  
            await interaction.editReply({
                content: `...otro` , files: [randomURlAnimal]
            }); 
        } catch (error) {
            console.log("error: " + error);  
            interaction.reply({
                content: "la rompiste mi ciela" 
            });
        }       
    }
});

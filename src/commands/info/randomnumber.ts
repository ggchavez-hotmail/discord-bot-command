import { Command } from "../../structures/Command";


export default new Command({
    name: "randomnumber",
    description: "ramdom number 0 to 100",
    run: async ({ interaction }) => {
        interaction.followUp({
            content: `Numero aleatorio: ${Math.floor(Math.random() * (100 - 0) + 0)}`,
          });
    }
});

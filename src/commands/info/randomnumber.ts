import { Command } from "../../structures/Command";


export default new Command({
    name: "randomnumber",
    description: "ramdom number",
    run: async ({ interaction }) => {
        interaction.followUp({
            content: `Numero aleatorio:  + ${Math.floor(Math.random() * (100 - 0) + 0)}`,
          });
    }
});

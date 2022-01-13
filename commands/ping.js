const discord = require("discord.js");

module.exports = {
  name: "ping", //nome do comando e como ele será usado
  category: "bot", //categoria do commando
  description: "Comando para ver a latência do bot", //descrição do comando
  run: async (client, message, args) => {
    message.delete();

    const m = await message.channel.send("🛠 carregando...");

    m.edit(
      "🏓|| Pong" +
        `\nLatencia do server **${message.guild.name}**: **${m.createdTimestamp - message.createdTimestamp}ms** \n` +
        "Latencia do Bot " +
        `**${Math.round(client.ws.ping)}ms** velocidade deletada!`
    );
    //vamos testar o comando
  }
};

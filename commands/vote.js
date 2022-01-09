const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Replies with the links to vote'),
    async execute(interaction) {
        const btnVote = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL("https://disboard.org/server/bump/755483507698172045")
                .setLabel('Disboard')
                .setStyle('LINK'),
            new MessageButton()
                .setURL("https://top.gg/servers/755483507698172045/vote")
                .setLabel('Top.gg')
                .setStyle('LINK'),
        );
        const message = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Fala dev!')
            .setAuthor({ name: 'ProgramaBOT', iconURL: 'https://i.ibb.co/g7V0JV9/aaaa.jpg', url: 'https://discord.gg/FNmJ5wd' })
            .setDescription('Você pode ajudar o servidor a crescer votando nos sites abaixo\n\nObs: é possível votar várias vezes por dia :D');
        interaction.reply({ embeds: [message], components: [btnVote] })
    }
};
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('repo')
        .setDescription('Replies with the link to the GitHub repository'),
    async execute(interaction) {
        const btnGithub = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL("https://github.com/Comunidade-ProgramadoresBR/ProgramaBOT")
                .setLabel('GitHub')
                .setStyle('LINK'),
        );
        const message = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Fala dev!')
            .setAuthor({ name: 'ProgramaBOT', iconURL: 'https://i.ibb.co/g7V0JV9/aaaa.jpg', url: 'https://discord.gg/FNmJ5wd' })
            .setDescription('Nosso bot está em constante desenvolvimento.\nSe você quiser ajudar de alguma forma, é só apertar no botão abaixo!');
        interaction.reply({ embeds: [message], components: [btnGithub] })
    }
};
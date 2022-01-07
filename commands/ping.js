const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pingg')
        .setDescription('Replies with pong'),
    async execute(interaction) {
        interaction.reply({ content: 'Pong' })
    }
};
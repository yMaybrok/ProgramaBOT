const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menurole')
        .setDescription('Create a menu with roles')
        .addOptions(option =>
            option.setName('role')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('role')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('role')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        ),
    async execute(interaction) {
        interaction.reply({ content: 'Pong' })
    }
};
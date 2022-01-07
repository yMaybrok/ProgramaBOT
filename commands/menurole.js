const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menurole')
        .setDescription('Create a menu with roles')
        .addOptions(option =>
            option.setName('channel')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('description')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('role_1')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('role_2')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('role_3')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('role_4')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('placeholder')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        )
        .addOptions(option =>
            option.setName('information')
                .setDescription('The role to add to the menu')
                .setRequired(true)
                .setType('role'),
        ),
    async execute(interaction) {
        interaction.reply({ content: 'Pong' })
    }
};
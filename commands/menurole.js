const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menurole')
        .setDescription('Create a menu with roles')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to add to the menu')
                .setRequired(true),
        )
        .addStringOption(option =>
            option.setName('placeholder')
                .setDescription('Text to be displayed when no role is selected')
                .setRequired(true)
        )
        .addRoleOption(option =>
            option.setName('role_1')
                .setDescription('A role to add to the menu')
                // .setRequired(true),
        )
        .addRoleOption(option =>
            option.setName('role_2')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_3')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_4')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_5')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_6')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_7')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_8')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_9')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_10')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_11')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_12')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_13')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_14')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_15')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_16')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_17')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_18')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_19')
                .setDescription('A role to add to the menu')
        )
        .addRoleOption(option =>
            option.setName('role_20')
                .setDescription('A role to add to the menu')
        ),
    async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder(interaction.options.getString('placeholder'))
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
    }
};
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// Require the necessary discord.js classes
const { Client, Intents, Collection, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { TOKEN, TEST_GUILD_ID, MAIN_CHANNEL_ID } = require('./config.json');

client.on('ready', () => {
    console.log('Bot is online!');

    let activities = [
        `Acesse nosso Subreddit`,
        `Ajude divulgando nosso servidor`,
    ];
    var i = 0;
    setInterval((() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' })), 10000);

    client.user.setStatus("ProgramadoresBR");

    const btnSubreddit = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL("https://bit.ly/SubProgramadoresBR")
                .setLabel('Subreddit')
                .setStyle('LINK'),
            new MessageButton()
                .setURL("https://discord.gg/FNmJ5wd")
                .setLabel('Discord')
                .setStyle('LINK'),
    );
    const welcomeEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Olá, eu sou o ProgramaBOT!')
        .setAuthor({ name: 'ProgramaBOT', iconURL: 'https://i.ibb.co/g7V0JV9/aaaa.jpg', url: 'https://discord.gg/FNmJ5wd' })
        .setDescription('Eu sou o bot oficial do ProgramadoresBR!\n\nSe você precisa de ajuda, tente /help');
    if (MAIN_CHANNEL_ID) {
        client.channels.cache.get(MAIN_CHANNEL_ID).send({ embeds: [welcomeEmbed], components: [btnSubreddit] })
    };
});

// Loading commands from the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = [];

// Creating a collection for commands in client
client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

// When the client is ready, this only runs once
client.once('ready', () => {
    console.log('Ready!');
    // Registering the commands in the client
    const CLIENT_ID = client.user.id;
    const rest = new REST({
        version: '9'
    }).setToken(TOKEN);
    (async () => {
        try {
            if (!TEST_GUILD_ID) {
                await rest.put(
                    Routes.applicationCommands(CLIENT_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands globally');
            } else {
                await rest.put(
                    Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands for development guild');
            }
        } catch (error) {
            if (error) console.error(error);
        }
    })();
});

// Reading Command
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Login to Discord with your client's token
client.login(TOKEN);
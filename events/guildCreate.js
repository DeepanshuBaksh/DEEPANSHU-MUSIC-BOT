const chalk = require('chalk');
const discord = require('discord.js');

let log = console.log;

module.exports = async (client) => {
    let guild = client.guild();
    client.user.setActivity(`${client.config.app.px}help for ${client.users.cache.size} users in ${client.guilds.cache.size} servers`);
    log(chalk.white(`Status Updated -> New Status: ${client.config.app.px}help for ${client.users.cache.size} users in ${client.guilds.cache.size} servers`))
    let embed = new discord.Embed()
        .setTitle(client.user.username)
        .setDescription([
            'Hello, I\'m ' + client.user.username + '. Thanks for inviting me.',
            'To see a list of all of my commands type `' + client.config.app.px + 'help`.'
        ].join('\n'))
        .setThumbnail({ url: client.user.displayAvatarURL() })
        .setTimestamp()
        .setFooter({ text: client.user.username, iconUrl: client.user.displayAvatarURL() })
    guild.systemChannel.send({ embed: embed })
};
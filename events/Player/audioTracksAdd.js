const { EmbedBuilder } = require('discord.js');
const {Translate} = require('../../translate')

module.exports = (queue) => {
    if (!client.config.app.extraMessages) return;

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate(`All the songs in playlist added into the queue <✅>`)})
        .setColor('#2f3136');

        const message = await queue.metadata.channel.send({ embeds: [embed] });
        setTimeout(() => {
            message.delete();
        }, 10000);
    })();
};
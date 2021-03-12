const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "info",
        description: "untuk melihat info bot"
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `v1.0.0`
        let info2 = `Node v12`
        let info3 = `Discord.js v12`
        let info4 = `Invalid-User#0695`
        let info5 = `In server WARKOP`

        let embed = new MessageEmbed()
            .setTitle(`Bot Information`)
            .setColor(`RANDOM`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`Version:`, info1, true)
            .addField(`Node Version:`, info2, true)
            .addField(`Coded in:`, info3, true)
            .addField(`Stay in:`, info5, true)
            .setDescription(`Bot Developed by: ${info4}`)
        message.channel.send(embed).then(m => (m.delete({timeout: 35000})));
    }
}
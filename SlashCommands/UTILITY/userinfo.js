const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const moment = require("moment")
 
module.exports = {
    name: 'userinfo',
    description: 'Get info about a user',
    permission: ['SEND_MESSAGES'],
    botPermission: ["CONNECT", "VIEW_CHANNEL", "SPEAK", "SEND_MESSAGES","USE_EXTERNAL_EMOJIS", "ATTACH_FILES"],
    ownerOnly: false,
    options: [
        {
            type: 'USER',
            description: 'Mention a user',
            name: 'user',
            required: true,
        },
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        const user = interaction.guild.members.cache.get(args[0]) || interaction.member;
        let stat = {
            online: "https://emoji.gg/assets/emoji/9166_online.png",
            idle: "https://emoji.gg/assets/emoji/3929_idle.png",
            dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
            offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
        }
 
        const roles = user.roles.cache.filter(s => s.id !== user.guild.id).map(role => role).join(", ")
        const whois = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${user.user.tag}`, user.user.avatarURL())
            .setThumbnail(user.user.avatarURL({ dynamic: true }))
            .addField(" Joined At", `<t:${parseInt(user.user.joinedTimestamp / 1000)}:R>`)
            .addField(" Account Created At", `<t:${parseInt(user.user.createdTimestamp / 1000)}:R>`)
            .addField(" Common Information", `ID: \`${user.user.id}\`\nDiscriminator: \`${user.user.discriminator}\`\nBot: \`${user.user.bot}\`\nDeleted User: \`${user.deleted}\``)

 
        let array = []
 
 
        interaction.followUp({ embeds: [whois] });
    }
}
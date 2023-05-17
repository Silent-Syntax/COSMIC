const { MessageEmbed } = require('discord.js')


module.exports ={
    name: 'play',
    category: 'music',
    description: "Plays the damn shit MUSIC.",
    emoji: '🛡️',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const voiceChannel = message.member?.voice?.channel
        await client.distube.play(voiceChannel, args.join(" "), {
            message,
            textChannel: message.channel,
            member: message.member,
        })
    }
    
}
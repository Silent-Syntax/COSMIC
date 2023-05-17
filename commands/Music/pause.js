const { MessageEmbed } = require('discord.js')


module.exports ={
    name: 'pause',
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
        await client.distube.pause(message)
        }
    
}
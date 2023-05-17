const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "rps",
    description: "play a game of rock, paper and scissors",
    emoji: "🎮",
    run: async(client, message, args) => {
        let embed = new MessageEmbed()
        .setTitle("RPS!")
        .setDescription('React to play!\n**Rock 🪨**\n**Paper 📰**\n**Scissors ✂️**')
    .setColor("BLUE")
    .setFooter(`${message.author.tag}`, message.author.avatarURL({dynamic:true}))
        let msg = await message.reply({embeds: [embed]})
        await msg.react("🪨")
        await msg.react("📰")
        await msg.react("✂")
        
        const filter = (reaction, user) => {
            return ['🪨', '📰', '✂'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🪨', '📰', '✂']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions({filter, max: 1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
      let result = new MessageEmbed()
     .setTitle("Result")
     .addField("Your Choice", `${reaction.emoji.name}`)
    .addField("Bot's choice", `${me}`)
    .setColor("#FF0000")
 .setFooter(`${message.author.tag}`, message.author.avatarURL({dynamic:true}))
  await msg.edit({embeds: [result]})

    if((me === "🪨" && reaction.emoji.name === "✂") ||
   (me === "✂" && reaction.emoji.name === "📰") ||
      (me === "📰" && reaction.emoji.name === "🪨")) {
    message.reply({content: "You lost"});
      } else if (me === reaction.emoji.name) {
     return message.reply({content: "It's a tie"});
        } else {
        return message.reply({content: "You Won"});
                }
            })
   .catch(collected => {
     message.reply({content: 'Game cancelled'});
            }) 

    }
}
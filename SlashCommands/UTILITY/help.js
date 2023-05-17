const { MessageButton } = require('discord.js')

const{ Discord, MessageActionRow, MessageSelectMenu} = require("discord.js")

const {MessageEmbed} = require("discord.js")

module.exports = {
  name: "help",
  description: "Sends a dropdown menu",
  run: async(client, interaction, args) => {
   
   
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Select your option")
      .addOptions([
        {
          label: "Fun",
          description: "Shows all the fun commands",
          value: "fun",
          emoji: process.env.FUN
        }, 
        {
          label: "Information",
          description: "Shows all the information commands",
          value: "info" ,
          emoji: process.env.INFO
        },
        {
          label: "Moderation",
          description: "Shows all the moderation commands",
          value: "mod" ,
          emoji: process.env.MOD
        },
        {
          label: "Utility",
          description: "Shows all the utility commands",
          value: "utility"  ,
          emoji: process.env.UTILITY
        }
      ])
    )

    let embed = new MessageEmbed()
    .setTitle("HELP MENU")
    .setDescription(`
    Select One Of The Menu To See Commands.

    Prefix :-  **-**

    **Invite Link**, [Click here to invite me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT')
    
let embed1 = new MessageEmbed()
    .setTitle("Fun Commands List.")
    .setDescription(`
    -8ball    - Tells you a fortune.    
    -ascii    - Returns provided text in ascii format.    
    -catsay   - Make the cat say your message.     
    -clap     - Add clap emoji between each word. 
    -cowsay   - Make a cow say your message.   
    -dab      - Adds dab emoji after each word.      
    -fliptext - Flip some text. 
    -gif      - Get gifs based on your search.   
    -hack     - Fun help command.      
    -hug      - Just hug someone.
    -kill     - Kills a user. 
    -meme     - Sends a random meme.
    -nitro    - Fake a nitro gift.  
    -respect  - Returns Random Respect GIF. 
    -reverse  - Reverse the text entered.
    -roast    - Roasts a user.
    `)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT')

let embed2 = new MessageEmbed()
    .setTitle("Info Commands List.")
    .setDescription(`
-botinfo - Shows the bot info.
-emojiid - Get ID of emojis.
-invite  - Get the bot's invite link.
-ping - Get the bot's ping.
-userinfo - Get the information of user.
`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT')
  


let embed3 = new MessageEmbed()
    .setTitle("Mod Commands List")
    .setDescription(`
    -ban - Ban anyone with one shot whithout knowing anyone xD.
    -dm - Sends DM message to any user.
    -kick - Kick anyone with one shot xD.
    -mute - Mutes the specified user.
    -softban - Soft Ban a User.
    -tempmute - Returns latency and API ping.
    -unmute - Unmutes the specified user.
    `)
    .setColor("GREEN")  
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT')
  

let embed5 = new MessageEmbed()
    .setTitle("Utility Commands List")
    .setDescription(`
    -announce - Make an Announcemnet in your Server. 
    -avatar - Gives avatar for message author or mentioned user.
    -bug - Submit a bug.
    -suggest - Submit suggestion.
    -calc - calculator
    -nickname - Change the Nickname of other Users.
    -createrole - createrole.
    -delchannel - Delete Channels From your Server.
    -delrole - Deletes a role.
    -giverole - Give roles to users.
    -purge - Delete the given number of messages.
    -removerole - Take roles from users.
    -serverinfo - Shows info about a server.
    -suggestion - Anything
    -userinfo - Get info about your account or mentiobned user's account.
`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT')
  


const collector = interaction.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})

collector.on("collect", async (collected) => {
const value = collected.values[0]

if(value === "fun") {
  collected.reply({embeds:[embed1], ephemeral:true})
}

if(value === "info") {
  collected.reply({embeds:[embed2], ephemeral:true})
}

if(value === "mod") {
  collected.reply({embeds:[embed3], ephemeral:true})
}

if(value === "utility") {
  collected.reply({embeds:[embed5], ephemeral:true})
}




})

interaction.followUp({ephemeral:true, embeds : [embed], components:[row]})
  

  
  }

}
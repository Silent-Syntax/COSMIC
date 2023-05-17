  const { MessageButton } = require('discord.js')

const{ Discord, MessageActionRow, MessageSelectMenu} = require("discord.js")

const {MessageEmbed} = require("discord.js")

module.exports = {
  name: "help",
category: "info",
run : async(client, message, args) => { 
   
   
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
          label:'Image',
          description:'Shows all the image commands',
          value:'img',
          emoji: process.env.IMG
        },
        {
          label: "Games",
          description: "Shows all the games commands",
          value: "games" ,
          emoji: process.env.GAMES
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
        },
        {
          label: "Music",
          description: "Shows all the music commands",
          value: "music"  ,
          emoji: process.env.MUSIC
        }
      ])
    )


  
    let embed = new MessageEmbed()
    .setTitle("HELP MENU")
    .setDescription(`
    Select One Of The Menu To See Commands.

<a:features:999030899758858270>Features of bot.<a:features:999030899758858270>

<a:fun:999044533448872056> | **Fun Commands** 
<a:Games:990949187837362196> | **Games Commands**
<:pb_image:999041730571669514> | **Image Commands**  
<:commands:999022284994007040> | **Info Commands**
<a:G1_HeadMod:999046670912340008> | **Mod Commands**
<:utitlit:999046804211507260> | **Utility Commands**
<a:music:999416827207753758> | **Music Commands**

<a:links:999024239392862290>|**Invite Link** :- [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=876691394176098335&permissions=8&scope=bot%20applications.commands)`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')


  
let music = new MessageEmbed()
.setTitle('<a:music:999416827207753758> | Music Commands List. | <a:music:999416827207753758>')
.setDescription(`

c-play - Plays the music you given.
c-stop - Stops the music.
c-queue - N/A.
c-resume - Resume the music.
`)
.setColor("GREEN") 
.setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
.setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')



let fun = new MessageEmbed()
    .setTitle(`<a:fun:999044533448872056> |Fun Commands List. | <a:fun:999044533448872056>`)
    .setDescription(`
    c-ascii    - Returns provided text in ascii format.  
    c-clap     - Add clap emoji between each word. 
    c-dab      - Adds dab emoji after each word.      
    c-fliptext - Flip some text.    
    c-hack     - Fun help command.      
    c-kill     - Kills a user. 
    c-nitro    - Fake a nitro gift.   
    c-reverse  - Reverse the text entered.
    c-roast    - Roasts a user.
    `)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')



  
let games = new MessageEmbed()
    .setTitle(`<a:Games:990949187837362196> | Fun Commands List. | <a:Games:990949187837362196>`)
    .setDescription(`
c-8ball - Tells you a fortune.    
c-rps - Rock , Paper , Scissor.
c-snake - Snake game.
    `)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')



  
let info = new MessageEmbed()
    .setTitle("<:commands:999022284994007040> | Info Commands List. | <:commands:999022284994007040>")
    .setDescription(`
c-botinfo - Shows the bot info.
c-emojiid - Get ID of emojis.
c-invite  - Get the bot's invite link.
c-ping - Get the bot's ping.
c-userinfo - Get the information of user.
c-badges - Badge info.
`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')
  


let mod = new MessageEmbed()
    .setTitle("<a:G1_HeadMod:999046670912340008> | Mod Commands List | <a:G1_HeadMod:999046670912340008>")
    .setDescription(`
    c-ban - Ban anyone with one shot whithout knowing anyone.
    c-dm - Sends DM message to any user.
    c-kick - Kick anyone with one shot xD.
    c-mute - Mutes the specified user.
    c-softban - Soft Ban a User.
    c-tempmute - Returns latency and API ping.
    c-unmute - Unmutes the specified user.
    c-nickname - Change the Nickname of other Users.
    c-createrole - createrole.
    c-delchannel - Delete Channels From your Server.
    c-delrole - Deletes a role.
    c-giverole - Give roles to users.
    c-purge - Delete the given number of messages.
    c-removerole - Take roles from users.
    `)
  .setColor("GREEN")  
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')
  

  
let uti = new MessageEmbed()
    .setTitle("<:utitlit:999046804211507260> | Utility Commands List | <:utitlit:999046804211507260>")
    .setDescription(`
    c-announce - Make an Announcemnet in your Server. 
    c-avatar - Gives avatar for message author or mentioned user.
    c-bug - Submit a bug.
    c-suggest - Submit suggestion.
    c-calc - calculator
    c-serverinfo - Shows info about a server.
    c-suggestion - Anything
    c-userinfo - Get info about your account or mentiobned user's account.
`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')


  
let img = new MessageEmbed()
   .setTitle("<:pb_image:999041730571669514> | Image Commands List | <:pb_image:999041730571669514>")
    .setDescription(`   
    c-catsay   - Make the cat say your message.   
    c-cowsay   - Make a cow say your message.   
    c-gif      - Get gifs based on your search.
    c-hug      - Just hug someone.
    c-meme     - Sends a random meme.
    c-respect  - Returns Random Respect GIF.
`)
    .setColor("GREEN") 
    .setThumbnail('https://images-ext-2.discordapp.net/external/SoLm9vZd9InoB30dXvNUnwnv49yHPPRMNPz4Qak5N2U/https/cdn.discordapp.com/avatars/876691394176098335/78227d21d2972086813b5344ab7a6e7f.webp')
    .setFooter('EVO DEVELOPMENT','https://cdn.discordapp.com/attachments/997202165615575216/998656371803312148/unknown.png')


  
const collector = message.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})

  
collector.on("collect", async (collected) => {
const value = collected.values[0]

  
if(value === "fun") {
  collected.reply({embeds:[fun], ephemeral:true})
}

if(value === "info") {
  collected.reply({embeds:[info], ephemeral:true})
}

if(value === "mod") {
  collected.reply({embeds:[mod], ephemeral:true})
}

if(value === "utility") {
  collected.reply({embeds:[uti], ephemeral:true})
}
if(value ==='img'){
    collected.reply({embeds:[img], ephemeral:true})
  }

if(value ==='games'){
    collected.reply({embeds:[games], ephemeral:true})
  }
 
if(value ==='music'){
  collected.reply({embeds:[music], ephemeral:true})
}


})

message.reply({embeds : [embed], components:[row]})
  

  
  }

}
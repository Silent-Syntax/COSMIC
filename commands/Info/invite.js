const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Get Cosmic's Invite Link [Here](https://discord.com/oauth2/authorize?client_id=876691394176098335&permissions=8&scope=bot%20applications.commands) now!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  }
}
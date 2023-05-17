const Discord = require("discord.js");

module.exports = {
  name: "vote",
  description: " ",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**VOTE NOW [Here](https://top.gg/bot/876691394176098335) now!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  }
}
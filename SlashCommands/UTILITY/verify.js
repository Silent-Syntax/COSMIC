const { Client, CommandInteraction, MessageEmbed, MessageSelectMenu, MessageActionRow, MessageButton } = require("discord.js");
 
module.exports = {
    name: "setup-verify",
    description: "👑 Setup the verify menu",
    type: 'CHAT_INPUT',
    options: [
      {
        name: "channel",
        description: "Select a channel you want to send the apply embed to",
        type: "CHANNEL",
        required: true,
      }
    ], 
    run: async (client, interaction, args) => {
      let ch = interaction.options.getChannel('channel');
      let msg = await interaction.followUp(`Fetching...`);
 
      if(ch.type != 'GUILD_TEXT') return msg.edit(`🚩 You must provide a channel, and not category or voice channel!`)

      client.on("interactionCreate", async (interaction) => {
        if(!interaction.isButton() && !interaction.isSelectMenu()) return;
        const appu = "992862438254977034";
            if (interaction.customId == `appnd`) {
            if(interaction.member.roles.cache.has(appu)) {
              await interaction.member.roles.remove(appu)
              return interaction.reply({ content: `<a:No_1:806632800195182674> **You already have the role, so i removed it from you!**`, ephemeral: true })
            }
            interaction.member.roles.add(appu)
            interaction.reply({ content: `<a:tick:941218438955806771> **Successfuly added the role!**`, ephemeral: true })
          } 
      }) 
      
      const emb = new MessageEmbed()
      .setAuthor({ name: `Cosmic Verification  `, iconURL: `${client.user.displayAvatarURL()}` })
      .setColor('#2f3136')
      .setFooter(`EVO Devlopment`,'https://images-ext-1.discordapp.net/external/cEb8v64givfu4k3AJOmnPQnnqYrNSEuBajlUcE2MKmY/https/cdn.discordapp.com/avatars/997935460036923452/ed50bf795751fe8c5054e1c3a1001d44.webp') 
      .setDescription(`**Apply for verification **\n\n***Click the \`button\` below to get verified  ticket!***`)
      const row = new MessageActionRow()
            .addComponents(
              new MessageButton()
        .setLabel(`Apply For Verification `)
       .setCustomId(`appnd`)
        .setEmoji(`931664743138218055`)
        .setStyle(`SECONDARY`)
            );
      ch.send({ content: ` `, embeds: [emb], components: [row] });
      return msg.edit({ content: `💖 The verify system has successfully been setup view it here: ${ch}` })

      
    },
}; 
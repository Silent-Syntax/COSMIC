module.exports = {
  name: "bug",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("❌ Please specify the bug");   
  if (args[0] === "bug") return message.reply("Please specify the bug");   
  args = args.join(" ");   
  message.reply("✅Thanks for submitting");  
  const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~**\`\`\``;   
  client.channels.cache.get('992843507393908891').send(content)
}
}
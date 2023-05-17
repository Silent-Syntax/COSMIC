    module.exports.run = async (client,message) => {
    
    if (message.author.bot || !message.guild) return;
    
    if (!message.content.startsWith(process.env.PREFIX)) return;

    
    if (!message.member) message.guild.fetchMembers(message);
    
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);


    
    const cmd = args.shift().toLowerCase();

        
    if (cmd.length === 0) return;


    let command = client.commands.get(cmd)

    


    if (!command) return


    if(command.pro){


    let guild = await client.db.get(`premium_${message.guild.id}`)



    if(!guild){




        return message.channel.send(`this command only avalible for premium server`)


    }}




    if (command) command.run(client, message, args)





    }

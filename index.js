 const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("KIDS");
});

app.listen(port, () => {
  console.log(`hehee boi`);
});

const Discord = require("discord.js");
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS", "GUILD_VOICE_STATES" , "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS" , "GUILD_MEMBERS" , "GUILD_MESSAGES" , "GUILD_MESSAGE_REACTIONS" , "DIRECT_MESSAGE_REACTIONS"],
});    
const { MessageEmbed } = require('discord.js')

 //DATABASE
const { Database } = require('quickmongo');//quickmongo

//DATABASE

const simplydjs = require('simply-djs'); //Simply-Djs 

client.db = new Database(process.env.DB);  //connecting database from env


// Global Variables
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();
client.slash = new Discord.Collection();
  

// Initializing the project
["command", "events", "slash","error"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
}); 
(console.log(client.guilds.cache))
  
 client.on('messageCreate', message => {
  if (message.content.includes("<@876691394176098335>"))
message.channel.send(`
Hy <a:pika_wave:999032412015165471> ,
My <:name:999032800374177792> is COSMIC.

My prefix is c- .
Still want help? - Do c-help.
`) 
})   
       


client.on("ready", () => {
	const activities = [
		{ name: `${client.guilds.cache.size} Servers | c-help` , type: 3 },  
		{ name: `${client.channels.cache.size} Channels | c-help`, type: 3 }  
	];
	const bstatus = [
		'online',
		'dnd',
		'idle'
	];
	let i = 0;
	setInterval(() => {
		if(i >= activities.length) i = 0
		client.user.setActivity(activities[i])
		i++;
	}, 5000);

	let s = 0;
	setInterval(() => {
		if(s >= activities.length) s = 0
		client.user.setStatus(bstatus[s])
		s++;
	}, 30000);
	console.log(`Loaded Bot Status!`)
   
 const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
client.distube = new DisTube(client, {
  plugins: [new SpotifyPlugin()],
});
new SpotifyPlugin({
    parallel: true,
    emitEventsAfterFetching: false,
    api: {
      clientId: "8d0daf14f2ab44d4bb2ad94ac1732b49",
      clientSecret: "8ade571ad3f84b00823d215c9139e89f",
    },
  });
const status = queue =>
    `Volume: \`${queue.volume}%\` | Filter: \`${
        queue.filters.join(', ') || 'Off'
    }\` | Loop: \`${
        queue.repeatMode
            ? queue.repeatMode === 2
                ? 'All Queue'
                : 'This Song'
            : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

client.distube
    .on('playSong', (queue, song) =>
        queue.textChannel?.send(
            `Playing \`${song.name}\` - \`${
                song.formattedDuration
            }\`\nRequested by: ${song.user}\n`,
        ),
    )
    .on('addSong', (queue, song) =>
        queue.textChannel?.send(
            `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
        ),
    )
    .on('addList', (queue, playlist) =>
        queue.textChannel?.send(
            `Added \`${playlist.name}\` playlist (${
                playlist.songs.length
            } songs) to queue\n${status(queue)}`,
        ),
    )
    .on('finish', queue =>{ 
    queue.textChannel?.send('Finish queue!')
    client.distube.stop(message)
})
    .on('finishSong', queue =>
        queue.textChannel?.send('Finish song!'),
    )
    .on('disconnect', queue =>
        queue.textChannel?.send('Disconnected!'),
    )
    .on('empty', queue =>
        queue.textChannel?.send(
            'The voice channel is empty! Leaving the voice channel...',
        ),
    )
    // DisTubeOptions.searchSongs > 1
    .on('searchResult', (message, result) => {
        let i = 0
        message.channel.send(
            `**Choose an option from below**\n${result
                .map(
                    song =>
                        `**${++i}**. ${song.name} - \`${
                            song.formattedDuration
                        }\``,
                )
                .join(
                    '\n',
                )}\n*Enter anything else or wait 30 seconds to cancel*`,
        )
    })
    .on('searchCancel', message =>
        message.channel.send('Searching canceled'),
    )
    .on('searchInvalidAnswer', message =>
        message.channel.send('Invalid number of result.'),
    )
    .on('searchNoResult', message =>
        message.channel.send('No result found!'),
    )
    .on('searchDone', () => {})

})

client.login(process.env.TOKEN).catch(err => console.log(err))
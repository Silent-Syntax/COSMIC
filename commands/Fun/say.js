const Discord = module.require("discord.js");
const { MessageEmbed } = require('discord.js');
const {joinVoiceChannel} = require("@discordjs/voice");
const tts = require('google-translate-tts');
const { createAudioPlayer, NoSubscriberBehavior , createAudioResource } = require('@discordjs/voice');
const { AudioPlayerStatus } = require('@discordjs/voice');

module.exports = {
  name: "speak",
  description: "Make the cat say your message",
  botPerms: ["ATTTACH_FILES", "MANAGE_MESSAGES","JOIN_CHANNEL"],
  run: async (client, message, args) => {
    args = args.join(" ");
        let  voiceChannel  = message.member.voice.channel;
        if(!args)message.reply("Tell me something to say")
        else if(!voiceChannel) message.reply("Please Join a voice channel")
        else if(voiceChannel){
            const connection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            }); 
            const buffer = await tts.synthesize({
                text: args,
                voice: 'en',
                slow: false // optional
            });
            const { Readable } = require("node:stream");
            const bufferToStream = (binary) => {
            const readableStream = new Readable({
                read() {
                this.push(binary);
                this.push(null);
                }
            });
            return readableStream;
            };
            const resource = createAudioResource(bufferToStream(buffer));
            const player = createAudioPlayer({
                behaviors: {
                    noSubscriber: NoSubscriberBehavior.Pause,
                },
            });
            player.play(resource)
            connection.subscribe(player)
            player.on(AudioPlayerStatus.Playing, () => {
                message.channel.send("Started Playing audio")
            });
            player.on(AudioPlayerStatus.Idle, () => {
                connection.destroy();
            });
        }
  },
};
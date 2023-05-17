const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'im a bot i know nothing.',
    'Ahaha! Really? nah not tell yah sht',
    'Pfft get outta here bruh.',
    'If your a Ava Max fan go jump off a bridge.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'WTF i Certainl ynot a snitch.',
    'I would rather die than say it.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!'
];
module.exports = {
    name: '8ball',
    description: 'Ask a question to the magic 8ball',
    permission: ['SEND_MESSAGES'],
    ownerOnly: false,
    options: [
        {
            type: 'STRING',
            description: 'Your question',
            name: 'question',
            required: true,
        },
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;

        let yq = args.join(' ')
        let q = args.join(' ')
        if (!q) return 
        else {
            const embed = new MessageEmbed()
                .setAuthor(`${member.user.tag} Asked me`, member.user.avatarURL({ dynamic: true }))
                .setDescription(`**Question:** \n ${yq} \n**My Answer:** \n ${answers[Math.floor(Math.random() * answers.length)]}`)
                .setColor("RANDOM")
            interaction.followUp({ embeds: [embed] });
        }
    }
}
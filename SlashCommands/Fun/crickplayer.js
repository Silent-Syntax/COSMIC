const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const answers = [
'Ruturaj Gaikwad', 'Mayank Agarwal', 'Virat Kohli', 'Harbhajan Singh', 'Ishan Kishan', 'KL Rahul', 'Bhuvneshwar Kumar', 'Chetan Sakariya', 'Rohit Sharma', 'Ravindra Jadeja', 'Kuldeep Yadav', 'Rishabh Pant', 'Jasprit Bumrah', 'Yuzvendra Chahal', 'Mohammed Shami', 'Varun Chakravarthy', 'Aaron Finch', 'Matthew Wade', 'David Warner', 'Steve Smith', 'Nathan Coulter-Nile', 'Marcus Stoinis', 'Pat Cummins', 'Adam Zampa', 'Dan Christian', 'Glenn Maxwell', 'Alex Carey', 'Kane Williamson', 'Colin de Grandhomme', 'Mitchell Santner', 'Martin Guptill', 'Trent Boult', 'Lockie Ferguson', 'Tim Southee', 'Ish Sodhi', 'Chris Gayle', 'Hasan Ali', 'Imad Wasim', 'Mohammad Hafeez', 'Shaheen Afridi', 'Sarfaraz Ahmed', 'Shoaib Malik', 'Wahab Riaz', 'Fakhar Zaman', 'Sheldon Cottrell', 'Shimron Hetmyer', 'Kemar Roach', 'Fabian Allen', 'Evin Lewis', 'Shai Hope', 'Peter Handscomb', 'James Neesham', 'Joe Root', 'Ben Stokes', 'Adil Rashid', 'Chris Woakes', 'Moeen Ali', 'Sam Billings', 'Jason Roy', 'Jofra Archer', 'Jonny Bairstow', 'Jos Buttler', 'Eoin Morgan', 'Sam Curran', 'Mark Wood', 'Jason Holder', 'Shikhar Dhawan', 'Faf Du Plessis'
];
module.exports = {
    name: 'cricketplayer',
    description: 'Get a random cricket player',
    permission: ['SEND_MESSAGES'],
    ownerOnly: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
     
            const embed = new MessageEmbed()
                .setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)
                .setColor("RANDOM")
            interaction.followUp({ embeds: [embed] });
        }
    }

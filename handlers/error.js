const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
  const errchannel = "944257235977138266";

  process.on('unhandeledRejection', (reason, p) => {
    console.log("A error has occurred but i managed to not crash XD")
    console.log(reason, p)


  })
  process.on('uncaughtException', (err, origin) => {
    console.log("A error has occurred but i managed to not crash XD")
    console.log(err, origin)


  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log("A error has occurred but i managed to not crash XD")
    console.log(err, origin)


  })
  process.on('multipleResolves', (type, promise, reason) => {

    console.log(" [Anti-crash] :: Multiple Resolves")
    console.log(type, promise, reason)



  })
}
const { Client, GatewayIntentBits } = require("discord.js")
const { CommandsBuilder } = require('../Utils/CommandsBuilder')

exports.DiscordJS = {
    newClient : function() { return new Client( {intents: [GatewayIntentBits.Guilds]} ); },
    newCommands : (name) => CommandsBuilder.newCommand(name),
    commands : [],
    prefix : "!",
    databases : [], //Add db table as array here
}
const { Client, GatewayIntentBits } = require("discord.js")

exports.DiscordJS = {
    newClient : function() { return new Client( {intents: [GatewayIntentBits.Guilds]} ); },
    commands : [],
    prefix : "!",
    databases : [], //Add db table as array here
}
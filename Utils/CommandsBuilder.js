const Command = require('../Discord/Command')

exports.CommandsBuilder = {
    newCommand : function(commandName) { return new Command(commandName) }
}
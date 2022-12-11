const { DiscordJS } = require('./Discord/Discord');

const client = DiscordJS.newClient();

client.on('ready', () => {
    console.log("ok")
});
test.login("DISCORD_TOKEN_BOT");
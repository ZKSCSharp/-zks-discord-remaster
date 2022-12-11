const { DiscordJS } = require('./Discord/Discord');

const client = DiscordJS.newClient();

client.on('ready', () => {
    console.log("ok")
});
test.login("MTAzOTIzMTE1MTQyNTk5NDc5Mg.GQ64jV.8jhX1wOVCexSc105xcbOBv1jUEtt9IaMY4pL6Q");
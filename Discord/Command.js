class Command {
    constructor (name) 
    { this.name = name; }

    #commandPerm = {}

    setCommandPerm(permName, discordPermID) { 
        if (!this.getCommandPerms(discordPermID)) this.#commandPerm[permName] = discordPermID;
        else console.log("Perm already exist for this command")
    }

    getCommandPerms(permName = null) {
        if (discordPermID) return this.#commandPerm[permName];
        else return this.#commandPerm;
    }
}

module.exports = Command;
const { Client } = require('discord-rpc');
const clientids = require('../clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class VSC {
    constructor() {
        rpc.on('ready', () => {
            rpc.setActivity({
                details: "Programing in Java-Script",
                startTimestamp: new Date(),
                largeImageKey: "vscode",
                largeIconText: "what are you doing here?",
                smallImageKey: "js",
                smallImageText: "Editing in Visual Studio Code - Insider"
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids["Visual-Studio-Code"].id
        })
    }
}
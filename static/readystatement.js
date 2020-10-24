const { Client } = require('discord-rpc');
const clientids = require('../clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class readystatement {
    
    constructor() {
        rpc.on('ready', () => {
            rpc.setActivity({
                details: "Using Discord RPC Intrface",
                startTimestamp: new Date(),
                largeImageKey: "discordvs",
                largeIconText: "what are you doing here?"
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids["Discord-RPC-Interface"].id
        })
    }
}


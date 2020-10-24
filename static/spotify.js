const { Client } = require('discord-rpc');
const clientids = require('../clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class spotify {
    
    constructor() {
        rpc.on('ready', () => {
            rpc.setActivity({
                details: "Listening to spotify",
                startTimestamp: new Date(),
                largeImageKey: "spotify",
                largeIconText: "what are you doing here?"
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids.Spotify.id
        })
    }
}


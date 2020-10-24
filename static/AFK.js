const { Client } = require('discord-rpc');
const clientids = require('../clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class AFK {
    constructor() {
        rpc.on('ready', () => {
            rpc.setActivity({
                largeImageKey: "afk-removebg",
                largeIconText: "yes, I'm not hiding here."
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids.AFK.id
        })
    }
}
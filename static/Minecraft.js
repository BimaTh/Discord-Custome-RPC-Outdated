const { Client } = require('discord-rpc');
const clientids = require('../clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class Minecraft {
    
    constructor() {
        rpc.on('ready', () => {
            rpc.setActivity({
                state: "Using T-Launcher",
                details: "Playing Bedwars on V1.8.9",
                startTimestamp: new Date(),
                largeImageKey:"minecraft2",
                largeIconText: "what are you doing here?"
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids.minecraft.id
        })
    }
}


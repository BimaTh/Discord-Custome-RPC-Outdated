const { Client } = require('discord-rpc');
const clientids = require('./clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class Util {
    
    static readystatement() {
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

    static spotify() {
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

    static VSC() {
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

    static AFK() {
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

    static cc() {
        rpc.on('ready', () => {
            rpc.setActivity({
                details: "Tp if you need me!",
                startTimestamp: new Date(),
                largeImageKey: "cc",
                largeIconText: "what are you doing here?",
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids.CC.id
        })

    }

    static unknown() {
        rpc.on('ready', () => {
            rpc.setActivity({
                details: "Using Discord RPC Intrface",
                startTimestamp: new Date(),
                largeImageKey: "discordvs",
                largeIconText: "what are you doing here?"
            });
            console.log(`\n Invalid Choice, running the Discord RPC Interface; Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids["Discord-RPC-Interface"].id
        })
    }

}


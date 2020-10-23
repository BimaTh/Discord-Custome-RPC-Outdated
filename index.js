const readline = require('readline');
const  func = require('./functions.js')
const { Client } = require('discord-rpc');

const rpc = new Client({
    transport: "ipc"
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var message = "chose between 1-4: \n 1-Discord-RPC-Interface \n 2-Spotify \n 3-Visual-Studio-Code \n 4-AFK \n 5-Cubic-Castles \n"

console.log('What should i display as a status?\n')

rl.question (message, (answer) => {

  if (answer === "1") func.readystatement()

  else if (answer === "2") func.spotify();
  else if (answer === "3") func.VSC();
  else if (answer === "4") func.AFK();
  else if (answer === "5") func.cc();
  else {func.unknown()};
  rl.close();
});
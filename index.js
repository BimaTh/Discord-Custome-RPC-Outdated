const readline = require('readline');
const  func = require('./functions.js')
const { Client } = require('discord-rpc');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const path = require('path');
const loadstatic = require('./lasdstatics.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


glob(`./static/*.js`).then(commands => {
  for (const commandFile of commands) {
    const { name } = path.parse(commandFile);
    console.log(`Loaded:${name}`)
  }
})

rl.question ("What should i display as a status?\n", (answer) => {
  
  if(`./static/${answer}.js`){
    new loadstatic(answer)
  }else{
    func.unknown()
  }

  rl.close();
})
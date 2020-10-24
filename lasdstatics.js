const { stat } = require('fs');
const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'))

module.exports = class loadstatic {
    constructor(cmd) {
        this.cmd = cmd
        return glob(`./static/*.js`).then(commands => {
           var funcfile = require(`./static/${cmd}.js`)
           new funcfile()
        });
    }
}
const fs = require('fs')
const os = require('os')
const path = require('path')
//const notesPath = path.resolve(os.homedir(), 'softeng19bAPI.token')

function request_and_respond(opt, program) {
console.log("show_paths_for_device_name")
    program.help()

}
module.exports = function(options, program) {

  //console.log(options)
  request_and_respond(options, program)
}

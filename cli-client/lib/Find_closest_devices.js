const fs = require('fs')
const os = require('os')
const path = require('path')
//const notesPath = path.resolve(os.homedir(), 'softeng19bAPI.token')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const Http1 = new XMLHttpRequest();


function request_and_respond(opt, program) {

  Http.open("POST",'http://localhost:3000/find_closest_devices/'+opt['lat']+'/'+opt['lon'] , false);
  Http.send()
  var result=JSON.parse(Http.responseText)
  console.log(result)

   }



module.exports = function(options, program) {

  //console.log(options)
  request_and_respond(options, program)
}

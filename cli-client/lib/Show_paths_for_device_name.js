const fs = require('fs')
const os = require('os')
const path = require('path')


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const Http1 = new XMLHttpRequest();

function request_and_respond(opt, program) {

  if ("device_name" in opt ) {
  Http.open("POST",'http://localhost:3000/show_paths_for_device_name/'+opt['device_name'] , false);
  Http.send()
  var result=JSON.parse(Http.responseText)
  console.log(result)
}
else { program.help()}
}
module.exports = function(options, program) {

  //console.log(options)
  request_and_respond(options, program)
}

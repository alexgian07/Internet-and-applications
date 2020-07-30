#!/usr/bin/env node

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// CLI
const program = require('commander')
const Find_closest_devices_handling = require('./../lib/Find_closest_devices')
var executed = false;




program
  .command('find_closest_devices')
  .description(' Usage :find_closest_devices --lat=<lat> --lon=<lon> ')
  .option('--lat <latitude> "the latitude of the users spot." ')
  .option('--lon <longitude> "the longitude of the users spot " ')

  //.option('-help ", --help display this help message " ')
  .action(options => {
    foo()
    Find_closest_devices_handling(options, program)
  })


function foo() {
  executed = true;
}
program.parse(process.argv)
// if no command is specified
if (!executed) {
  program.help();
}

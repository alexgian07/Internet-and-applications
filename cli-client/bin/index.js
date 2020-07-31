#!/usr/bin/env node

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// CLI
const program = require('commander')
const Find_closest_devices_handling = require('./../lib/Find_closest_devices')
const Show_paths_for_device_id_handling = require('./../lib/Show_paths_for_device_id')
const Show_paths_for_device_name_handling = require('./../lib/Show_paths_for_device_name')
const Show_polyline_for_path_id_handling = require('./../lib/Show_polyline_for_path_id')
const Show_polyline_for_path_name_handling = require('./../lib/Show_polyline_for_path_name')
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

program
  .command('show_polyline_for_path_id')
  .description(' Usage :show_polyline_for_path_id --path_id=<path_id>  ')
  .option('--path_id <path_id> "the path_id of the users choice." ')


  //.option('-help ", --help display this help message " ')
  .action(options => {
    foo()
    Show_polyline_for_path_id_handling(options, program)
  })

program
  .command('show_polyline_for_path_name')
  .description(' Usage :show_polyline_for_path_name --path_name=<path_name>  ')
  .option('--path_name <path_name> "the path_name of the users choice." ')

  //.option('-help ", --help display this help message " ')
  .action(options => {
    foo()
    Show_polyline_for_path_name_handling(options, program)
  })

program
  .command('show_paths_for_device_id')
  .description(' Usage :show_paths_for_device_id --device_id=<device_id> ')
  .option('--device_id <device_id> "the device_id of the users choice." ')


  //.option('-help ", --help display this help message " ')
  .action(options => {
    foo()
    Show_paths_for_device_id_handling(options, program)
  })

program
.command('show_paths_for_device_name')
.description(' Usage :show_paths_for_device_name --device_name=<device_name> ')
.option('--device_name <device_name> "the device_name of the users choice." ')

  //.option('-help ", --help display this help message " ')
  .action(options => {
    foo()
    Show_paths_for_device_name_handling(options, program)
  })


function foo() {
  executed = true;
}
program.parse(process.argv)
// if no command is specified
if (!executed) {
  program.help();
}

'use strict';

var utilities = require('../controllers/generalUtilities');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const Http1 = new XMLHttpRequest();
const devices_url = 'http://feed.opendata.imet.gr:23577/itravel/devices.json';
const getDeviceCoords_url = 'http://147.102.19.45:8080/services/getDeviceCoords/'
const getDeviceName_url = 'http://147.102.19.45:8080/services/getDeviceName/'
const paths_url = 'http://feed.opendata.imet.gr:23577/itravel/paths.json'
//hey
async function find_closest_devices(req, res) {

  var parameters_json = req.params
  var lat = parameters_json['lat']
  var lon = parameters_json['lon']
  var coords = {lat:lat, lon:lon};
//  var temp_device={lat:lat, lon:lon,id:0,Name:'temp',distance:0};
  Http.open("GET", devices_url, false);
  Http.send();
//  utilities.resolveAfterNSeconds(4)
  var devices_in_string_format = Http.responseText
//  console.log(devices_in_string_format)
  var devices_list=JSON.parse(Http.responseText)
  var closest_list=[]
  //console.log(devices_list)
 for (var j = 0; j < devices_list.length; j++) {
    var device = devices_list[j]
    var temp_device={lat:lat, lon:lon,id:0,Name:'temp',distance:0};
  //  console.log(device)
     temp_device.lat=device['lat']
     temp_device.lon=device['lon']
     temp_device.Name=device['device_Name']
     temp_device.id=device['device_id']
    var distance=utilities.calculateDistance(coords,temp_device)
    temp_device.distance=distance
  // console.log(temp_device)
    closest_list.push(temp_device)
  //  console.log(closest_list)
  //  console.log(closest_list.length)
  // console.log(temp_device)
    //console.log(closest_list.length)

  }
// console.log(closest_list)
var result = utilities.find_five_closest_devices(closest_list)
//res.json(JSON.stringify(result))
res.json(result)
//res.json("wow")
};

async function show_paths_for_device_id(req, res) {
 var device_id = (req.params)['device_id']
  Http.open("GET", paths_url, false);
  Http.send();
  var paths_in_string_format = Http.responseText
  var paths_list=JSON.parse(Http.responseText)

  var final_list=[]
 for (var j = 0; j < paths_list.length; j++) {
    var path = paths_list[j]
    var temp_path={Path_id:0, Path_Name:'temp',Path_origin_device_id:0,Path_destination_device_id:0,Device_position_in_the_path:'Unknown yet'};
     temp_path.Path_id=path['Path_id']
     temp_path.Path_Name=path['Path_Name']
     temp_path.Path_origin_device_id=path['Path_origin_device_id']
     temp_path.Path_destination_device_id=path['Path_destination_device_id']
    if (device_id==temp_path.Path_origin_device_id )
      {temp_path.Device_position_in_the_path='Start of the Path'
        final_list.push(temp_path)   }
    if (device_id==temp_path.Path_destination_device_id)
      {temp_path.Device_position_in_the_path='End of the Path'
        final_list.push(temp_path)  }

}


  res.json(final_list)
};
async function show_paths_for_device_name(req, res) {

  var device_name = (req.params)['device_name']

  Http1.open("GET", devices_url, false);
  Http1.send();
  var devices_in_string_format = Http1.responseText
  var devices_list=JSON.parse(Http1.responseText)
//  paths_list=[]
  for (var j = 0; j < devices_list.length; j++) {
  if (device_name==devices_list[j]['device_Name'])
      { var device_id=devices_list[j]['device_id'] }
  }

   Http.open("GET", paths_url, false);
   Http.send();
   var paths_in_string_format = Http.responseText
   var paths_list=JSON.parse(Http.responseText)

   var final_list=[]
  for (var j = 0; j < paths_list.length; j++) {
     var path = paths_list[j]
     var temp_path={Path_id:0, Path_Name:'temp',Path_origin_device_id:0,Path_destination_device_id:0,Device_position_in_the_path:'Unknown yet'};
      temp_path.Path_id=path['Path_id']
      temp_path.Path_Name=path['Path_Name']
      temp_path.Path_origin_device_id=path['Path_origin_device_id']
      temp_path.Path_destination_device_id=path['Path_destination_device_id']
     if (device_id==temp_path.Path_origin_device_id )
       {temp_path.Device_position_in_the_path='Start of the Path'
         final_list.push(temp_path)   }
     if (device_id==temp_path.Path_destination_device_id)
       {temp_path.Device_position_in_the_path='End of the Path'
         final_list.push(temp_path)  }

  }
   res.json(final_list)

};

async function show_polyline_for_path_id(req, res) {
  // dinw path id
  var path_id = (req.params)['path_id']

  Http1.open("GET", 'http://147.102.19.45:8080/services/getPathPolyline/' + path_id, false);
  Http1.send();
  var polyline_in_string_format = Http1.responseText
  var coords = polyline_in_string_format.split(' ')
  console.log(coords)

  res.json(coords)
};

async function show_polyline_for_path_name(req, res) {
  var path_name = (req.params)['path_name']
  //console.log(typeof(path_name))
  Http.open("GET", paths_url, false);
  Http.send();
  var paths_list = JSON.parse(Http.responseText)
 for (var j = 0; j < paths_list.length; j++) {
    var temp_obj = paths_list[j]

    //console.log(paths_list[j]['Path_Name'])
    if ((temp_obj['Path_Name']) == path_name) {
      var path_id = temp_obj['Path_id']
    }
  }
  //console.log(path_id)
  Http1.open("GET", 'http://147.102.19.45:8080/services/getPathPolyline/' + path_id, false);
  Http1.send();
  var polyline_in_string_format = Http1.responseText
  var coords = polyline_in_string_format.split(' ')
  // console.log(coords)
 res.json(coords)
};

module.exports.find_closest_devices = find_closest_devices;
module.exports.show_paths_for_device_id = show_paths_for_device_id;
module.exports.show_paths_for_device_name = show_paths_for_device_name;
module.exports.show_polyline_for_path_id = show_polyline_for_path_id;
module.exports.show_polyline_for_path_name = show_polyline_for_path_name;

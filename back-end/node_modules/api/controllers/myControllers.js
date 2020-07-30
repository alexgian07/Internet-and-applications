'use strict';

var utilities = require('../controllers/generalUtilities');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const Http1 = new XMLHttpRequest();
const devices_url = 'http://feed.opendata.imet.gr:23577/itravel/devices.json';
const getDeviceCoords_url='http://147.102.16.56:8080/services/getDeviceCoords/'
const  getDeviceName_url='http://147.102.16.56:8080/services/getDeviceName/'
const paths_url = 'http://feed.opendata.imet.gr:23577/itravel/paths'
//hey
async function find_closest_devices(req, res) {
//pairnw tis suntetagmenes apo to post request
  //console.log(req.params)
  var parameters_json = req.params
  var lat = parameters_json['lat']
  var lon=parameters_json['lon']
  //console.log(lat)
  // kanw aithsh gia ta device id's sto devices_url
  Http.open("GET", devices_url, true);
  Http.send();
  Http.onreadystatechange = (e) => {
    //console.log(Http.responseText)
    var devices_in_string_format = Http.responseText
  }
// brhka ola ta device id's kai twra  apo auta tha brw ta device coords me to 1o web service kai ta device names me to 2o
  //ektelw sunarthsh apo generalUtilities pou briskei tis 5 pio kontines staseis kai exw to apotelesma etoimo
const result = await utilities.resolveAfterNSeconds(2); // perimenw ligo gia na ginei to request

// exw brei to apotelesma kai to epistrefw
  res.json(Http.status)
};

async function show_paths_for_device_id(req, res) {   res.json("wow")};
async function show_paths_for_device_name(req, res) { res.json("wow2")};

async function show_polyline_for_path_id(req, res) {
  // dinw path id
  var path_id=(req.params)['path_id']
// briskw ola ta devices
  Http.open("GET", devices_url,false);
  Http.send();
 if (Http.readyState == 4 && Http.status == 200) {
   var devices_in_string_format = Http.responseText
  //console.log(JSON.parse(devices_in_string_format)[0]['lat'])
 }
var devices_object_list= JSON.parse(devices_in_string_format)
//zhtaw to polyline gia to dothen path_id
  Http1.open("GET", 'http://147.102.16.56:8080/services/getPathPolyline/'+path_id , false);
  Http1.send();
  var polyline_in_string_format = Http1.responseText
  var coords = polyline_in_string_format.split(' ')
  var final_polyline=[]
  for (var i = 0; i < coords.length; i++)
    {
       var first_split = coords[i]
        var temp_string = first_split.split(',')
        var temp_lat=temp_string[0]
        var temp_lon=temp_string[1]
        for (var j = 0; i < devices_object_list.length; i++)
        { var temp_obj = devices_object_list[j]
          var device_id=temp_obj['device_id']
          var device_Name=temp_obj['device_Name']
          var device_lat=temp_obj['lat']
          var device_lon=temp_obj['lon']
          if (temp_lat == device_lat &&  temp_lon== device_lon)
              {   final_polyline.push((device_id,device_Name)) }
       }
    }
    console.log(final_polyline)
  res.json(JSON.stringify(final_polyline))
};

async function show_polyline_for_path_name(req, res) {


  // dinw path id
  var path_name=(req.params)['path_name']
  //euresh  path_id apo path_name
  console.log(path_name)
 var   path_id=path_name
  Http.open("GET", 'http://147.102.16.56:8080/services/getPathPolyline/'+path_id , true);
  Http.send();
  Http.onreadystatechange = (e) => {
    //console.log(Http.responseText)
    var polyline_in_string_format = Http.responseText
  }
  const result = await utilities.resolveAfterNSeconds(2); // perimenw ligo gia na ginei to request
 //briskw apo tis suntetagmenes to kathe device id gia na to epistrepsw se kalh morfh
  // exw brei to apotelesma kai to epistrefw
  var coords = Http.responseText.split(' ')
  // for i in coords_list
  var first = coords[0]
  var temp_string = first.split(',')
  var temp_lat=temp_string[0]
  var temp_lon=temp_string[1]
  // briskw devide _name kai id apo suntetagmenes


  //console.log(Http.status)
  res.json(Http.status)
};

module.exports.find_closest_devices = find_closest_devices;
module.exports.show_paths_for_device_id = show_paths_for_device_id;
module.exports.show_paths_for_device_name = show_paths_for_device_name;
module.exports.show_polyline_for_path_id = show_polyline_for_path_id;
module.exports.show_polyline_for_path_name = show_polyline_for_path_name;

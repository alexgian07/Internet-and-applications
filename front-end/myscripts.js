
function create_frame() {
var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm'); // assign an id
document.body.appendChild(ifrm);
ifrm.setAttribute(document.getElementById("my_form"), 'results.html');
}

function myFunction(i) {
  var x = document.getElementById("T"+i).value;
  document.getElementById(i).innerHTML = x;
  //document.getElementById("my_form").action = "http://localhost:3000/show_paths_for_device_id/"+x;


  switch(i) {
    case 1:
//   alert("find_closest_devices");
var coords = []
coords=x.split('-')
 document.getElementById("my_form").action = "http://localhost:3000/find_closest_devices/"+coords[0]+'/'+coords[1];

    break;

    case 2:
// alert("show_polyline_for_path_id");
document.getElementById("my_form").action = "http://localhost:3000/show_polyline_for_path_id/"+x;
    break;

    case 3:
  //  alert("show_polyline_for_path_name");
document.getElementById("my_form").action = "http://localhost:3000/show_polyline_for_path_name/"+x;
    break;

    case 4:
    // alert("show_paths_for_device_id");
  document.getElementById("my_form").action = "http://localhost:3000/show_paths_for_device_id/"+x;
    break;

    case 5:
    // alert("show_paths_for_device_name");
document.getElementById("my_form").action = "http://localhost:3000/show_paths_for_device_name/"+x;
    break;

default:
console.log("no choice selected")
}



//document.getElementById('my_frame').src=document.getElementById("my_form").action
//document.getElementById("T6").value=document.getElementById("my_form").action

/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =  JSON.parse(this.responseText);
    window.alert(JSON.parse(this.responseText))
//  console.log(this.responseText)
  }
};
//xhttp.open("GET", "http://feed.opendata.imet.gr:23577/itravel/devices", true);
xhttp.open("POST", "http://localhost:3000/show_paths_for_device_id/12", true);
xhttp.send();

*/
/*
window.open('http://feed.opendata.imet.gr:23577/itravel/devices','_blank');
*/


}

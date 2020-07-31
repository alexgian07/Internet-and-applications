
exports.resolveAfterNSeconds = async function(N)
{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, N*1000);
  });
}

exports.calculateDistance=function(posA,posB)
{ //console.log(posA.lat)
  //console.log(posB.lat)
    var earthRadius = 6371;
    var lat = posB.lat-posA.lat; // Difference of latitude
    var lon = posB.lon-posA.lon; // Difference of longitude
  // console.log(lat)
  // console.log(lon)
    var disLat = (lat*Math.PI*earthRadius)/180; // Vertical distance
    var disLon = (lon*Math.PI*earthRadius)/180; // Horizontal distance

    var ret = Math.pow(disLat, 2) + Math.pow(disLon, 2);
    ret = Math.sqrt(ret); // Total distance (calculated by Pythagore: a^2 + b^2 = c^2)
    return ret
   //console.log(ret)
    // Now you have the total distance in the variable ret
}



exports.find_five_closest_devices=function(closest_list)
{
  var final_list=[]
  //console.log(closest_list)
  var swapp;
     var n = closest_list.length-1;
     var x=closest_list;
     //console.log(x)
     do {
         swapp = false;
         for (var i=0; i < n; i++)
         {
             if (x[i].distance < x[i+1].distance)
             {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
             }
         }
         n--;
     } while (swapp);
     for (var j=x.length-1; j >= x.length-5; j--)
     { final_list.push(x[j])          }

console.log(final_list)
  return final_list
}

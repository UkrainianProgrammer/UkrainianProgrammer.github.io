//Generate map
var myCenter = new google.maps.LatLng(30.618986, -96.338843);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:13,
  scrollwheel:false,
  draggable:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);



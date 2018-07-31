function initMap(){
//map options
  var options = {
    zoom:8,
    center:{lat:41.9779,lng:-91.6656}
  }
  //new map
  var map =  new google.maps.Map(document.getElementById('map'), options);

  //array of markers
  // var markers = [
  // {
  //     coords:{lat:41.971044,lng:-91.656106},
  //     iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  //     content:'<h1>Geonetric Building</h1>'
  //     }
  // ];

  // //Loop through marker array
  //    for(var i = 0; i<markers.length; i++){
  //    addMarker(markers[i]) 
  // }


  var ghostTest={
    location:'Your mom\'s place',
    longitude:-91.536121,
    latitude:41.661290,
    description:'Last night'
  };

  let ghost= new app.GhostSighting(ghostTest);
  ghost.addMarker(map);

}
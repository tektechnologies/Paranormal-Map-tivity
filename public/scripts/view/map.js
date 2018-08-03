/* global google */
'use strict';

var app = app || {};

(function(module){

  var maps = {};
  module.maps = maps;
  maps.markers = [];
  

  maps.initMap = () =>{
    console.log('initMap');
    //map options
    var options = {
      maxZoom:15,
      minZoom:4,
      zoom:4,
      streetViewControl:false,
      center:{lat:39.8283,lng:-98.5795}
    };

    //new map
    var map =  new google.maps.Map(document.getElementById('map'), options);

    //array of markers

    // //Loop through marker array
    //    for(var i = 0; i<markers.length; i++){
    //    addMarker(markers[i])
    // }

    google.maps.event.addListener(map, 'idle', function() {
      console.log('Map idle');

      app.sightings.fetchAll(map.getBounds(), (sightings) => {
        sightings.forEach(sighting => maps.markers.push(sighting.addMarker(map)));
        console.log(maps.markers);
      });
    });
  };
  $('#bigfoot_checkbox').on('click', function(event) {
    $('[src="../icons/bigfootpin.png"]').parent().toggle();
    console.log('checkbox clicked');
  })
  $('#alien_checkbox').on('click', function(event) {
    $('[src="../icons/ufopin.png"]').parent().toggle();
    console.log('checkbox clicked');
  })
  $('#ghost_checkbox').on('click', function(event) {
    $('[src="../icons/ghostpin.png"]').parent().toggle();
    console.log('checkbox clicked');
  })


})(app);
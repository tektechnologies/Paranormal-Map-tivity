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

      //remove existing markers
      maps.markers.forEach(marker=>{
        marker.setMap(null);
      });

      maps.markers.length=0;

      app.sightings.fetchAll(map.getBounds(), (sightings) => {
        sightings.forEach(sighting =>{
          var marker = sighting.addMarker(map);
          var checkbox = $(`[name="${marker.type}"]`);
          var isChecked = checkbox.prop('checked');
          marker.setVisible(isChecked);

          maps.markers.push(marker);

        });
        console.log(maps.markers);
      });
    });
  };
  $('input[type="checkbox"]').on('click', function() {
    maps.markers.forEach(marker=>{
      if(marker.type===this.name){
        marker.setVisible(this.checked);
      }
    });
  });


})(app);
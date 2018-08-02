/* global google */
'use strict';

var app = app || {};

(function(module){

  var maps = {};
  module.maps = maps;

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

    var ufoTest={
      city_location:'Right Here',
      city_longitude: -91.457970,
      city_latitude: 42.485785,
      text: 'Right Now'
    };

    let ufo= new app.UfoSighting(ufoTest);
    ufo.addMarker(map);


    var bigfootTest = {
      row_index: '3',
      county: 'Look Over Here',
      longitude: -91.532820,
      latitude: 42.600914,
      observed: 'Look Over There'
    };

    let bigfoot = new app.BigFootSighting(bigfootTest);
    bigfoot.addMarker(map);

    app.sightings.all.forEach(sighting => sighting.addMarker(map));

    google.maps.event.addListener(map, 'idle', function() {
      console.log('Map idle');
    });
  };



})(app);
/* global google */
'use strict';

var app = app || {};

(function(module){
  function BigFootSighting(data){
    this.type = 'bigfoot';
    this.name = data.county;
    this.lng = data.longitude;
    this.lat = data.latitude;
    this.description = data.observed;
    this.iconImage = '../icons/bigfootpin.png';
  }
  BigFootSighting.prototype.addMarker = function(map) {
    var props = this;
    var marker = new google.maps.Marker({
      position:{lng: props.lng, lat: props.lat},
      map:map,
      //icon:props.iconImage
    });
    //check for custom icon
    if (props.iconImage){
      //set icon image
      marker.setIcon(props.iconImage);
    }

    //check for content
    if(props.name){
      console.log(props.name);
      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>'+props.name+'</h1>' +
        '<button onclick="details()">Details</button>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  };

  module.BigFootSighting = BigFootSighting;
})(app);
/* global google */
'use strict';

var app = app || {};

(function(module){
  function GhostSighting(data){
    this.type='spirit';
    this.name=data.location;
    this.lng=data.longitude;
    this.lat=data.latitude;
    this.description=data.description;
  }

  GhostSighting.prototype.addMarker = function(map) {
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
    if(props.description){
      console.log(props.description);
      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>'+props.description+'</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  };

  module.GhostSighting = GhostSighting;
})(app);
/* global google */
'use strict';

var app = app || {};

(function(module){
  function BigFootSighting(data){
    Object.keys(data).forEach(key => this[key] = data[key]);
    this.type = 'bigfoot';
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
        `<button data-type="${props.type}" data-index="${props.index}">Details</button>`
      });

      marker.addListener('click', function(event){
        console.log({ event, clickThis: this })
        infoWindow.open(map, marker);
      });
    }
  };

  module.BigFootSighting = BigFootSighting;
})(app);
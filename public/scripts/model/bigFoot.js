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
      position:{lng: props.longitude, lat: props.latitude},
      map:map,
      //icon:props.iconImage
    });
    //check for custom icon
    if (props.iconImage){
      //set icon image
      marker.setIcon(props.iconImage);
    }

    //check for content
    if(props.county){
      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>'+props.county+'</h1>' +
        `<button data-type="${props.type}" data-index="${props.row_index}">Details</button>`
      });

      marker.addListener('click', function(event){
        console.log({ event, clickThis: this })
        infoWindow.open(map, marker);
      });

    }
    return marker;
  };

  BigFootSighting.prototype.toHtml= function() {
    let bigfootTemplate = Handlebars.compile(document.getElementById('bigfoot-details').innerText);
    console.log('rendering template');
    console.log(bigfootTemplate(this));
    return bigfootTemplate(this);
  };


  module.BigFootSighting = BigFootSighting;
})(app);
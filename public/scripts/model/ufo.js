/* global google */
'use strict';

var app = app || {};

(function(module){
  function UfoSighting(data){
    Object.keys(data).forEach(key => this[key] = data[key]);
    this.type='alien';
    this.iconImage='../icons/ufopin.png';
  }

  UfoSighting.prototype.addMarker = function(map) {
    var props = this;
    var marker = new google.maps.Marker({
      position:{lng: props.city_longitude, lat: props.city_latitude},
      map:map,
      //icon:props.iconImage
    });
    //check for custom icon
    if (props.iconImage){
      //set icon image
      marker.setIcon(props.iconImage);
    }

    //check for content
    if(props.city){
      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>' + props.city + '</h1>' +
        '<a href="'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  };
  UfoSighting.prototype.toHtml= function() {
    let ufoTemplate = Handlebars.compile(document.getElementById('ufo-details').innerText);
    return ufoTemplate(this);   
  };
  module.UfoSighting = UfoSighting;
})(app);
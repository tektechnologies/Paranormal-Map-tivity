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
      console.log(this);
      var infoWindow = new google.maps.InfoWindow({
        content:'<h5>'+props.county+'</h5>' +
        `<a href="/detail/bigfoot/${this.row_index}">View Report</a>`
      });

      marker.addListener('click', function(event){
        console.log({ event, clickThis: this });
        infoWindow.open(map, marker);
      });
    }
    
    marker.type=this.type;
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
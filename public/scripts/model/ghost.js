/* global google */
'use strict';

var app = app || {};

(function(module){
  function GhostSighting(data){
    Object.keys(data).forEach(key => this[key] = data[key]);
    this.type='spirit';
    this.iconImage='../icons/ghostpin.png';
  }

  GhostSighting.prototype.addMarker = function(map) {
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
    if(props.location){
      console.log(props.location);
      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>'+props.location+'</h1>' +
        '<button id = detailButton>Details</button>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  };
  GhostSighting.prototype.toHtml= function() {
    let ghostTemplate = Handlebars.compile(document.getElementById('ghost-details').innerText);
    return ghostTemplate(this);    
  };

// Book.prototype.toHtml = function(){return app.render('#detail-template', this);}

  module.GhostSighting = GhostSighting;
})(app);  
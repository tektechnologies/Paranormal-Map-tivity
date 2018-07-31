'use strict';

var app = app || {};

(function(module){

  var sightings=[];

  function GhostSighting(data){
    this.type='spirt';
    this.name=data.location;
    this.lng=data.longitude;
    this.lat=data.latitude;
    this.description=data.description;
  }

  var ghostTest={
    location:'Your mom\'s place',
    longitude:-91.536121,
    latitude:41.661290,
    description:'Last night'
  };

  let ghost= new GhostSighting(ghostTest);
  sightings.push(ghost);

  module.sightings=sightings;

})(app);
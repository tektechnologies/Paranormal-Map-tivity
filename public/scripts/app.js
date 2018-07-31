'use strict';

var app = app || {};

(function(module){

  var sightings=[];

  function UfoSighting(data){
    this.type='alien';
    this.name=data.city_location;
    this.lng=data.city_longitude;
    this.lat=data.city_latitude;
    this.description=data.text;
  }

  var ufoTest={
    location:'Right Here',
    longitude: -91.457970,
    latitude: 42.485785,
    description: 'Right Now'
  };

  let ufo = new UfoSighting(ufoTest);
  sightings.push(ufo);

  function BigFootSighting(data){
    this.type = 'bigfoot';
    this.name = data.longitude;
    this.lng = data.location;
    this.lat = data.latitude;
    this.description = data.observed;
  }

  var bigfootTest = {
    location: 'Look Over Here',
    longitude: -91.532820,
    latitude: 42.600914,
    description: 'Look Over There'
  }

  let bigfoot = new BigFootSighting(bigfootTest);
  sightings.push(bigfoot);

  module.sightings=sightings;
})(app);
'use strict';

var app = app || {};

(function(module){

  var sightings={};
  sightings.all = [];

  module.sightings=sightings;

  sightings.loadAll = (ctor,newData) => {
    sightings.all = sightings.all.concat(newData.map(function(report) {
      return new ctor(report);
    }));
  };

  sightings.loadOne = (type, index) => {
    
    $.get(`${app.Environment}/api/${type}/${index}`)
      .then(newData => {
        let one={};
        if(newData.text){
          one = new app.UfoSighting(newData);
        }
        if(newData.description){
          one = new app.GhostSighting(newData);
        }
        if(newData.observed){
          one = new app.BigFootSighting(newData);
        }
        console.log(one);
      })
  };

  sightings.fetchAll = callback => {
    $.get(`${app.Environment}/api/spirit`)
      .then(newData => sightings.loadAll(app.GhostSighting,newData));
    $.get(`${app.Environment}/api/alien`).then(newData =>sightings.loadAll(app.UfoSighting,newData));
    $.get(`${app.Environment}/api/bigfoot`).then(newData => sightings.loadAll(app.BigFootSighting,newData));
  };
})(app);
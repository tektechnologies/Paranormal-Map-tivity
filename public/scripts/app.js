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

  sightings.loadOne = (ctx, callback) => {
    $.get(`${app.Environment}/api/${ctx.params.type}/${ctx.params.index}`)
      .then(newData => {
        if(newData.text){
          console.log('is alien!');
        }
        if(newData.description){
          console.log('is ghost!');
        }
        if(newData.observed){
          console.log('is bigfoot!');
        }
      })
  };

  sightings.fetchAll = callback => {
    $.get(`${app.Environment}/api/spirit`)
      .then(newData => sightings.loadAll(app.GhostSighting,newData));
    $.get(`${app.Environment}/api/alien`).then(newData =>sightings.loadAll(app.UfoSighting,newData));
    $.get(`${app.Environment}/api/bigfoot`).then(newData => sightings.loadAll(app.BigFootSighting,newData));
  };
})(app);
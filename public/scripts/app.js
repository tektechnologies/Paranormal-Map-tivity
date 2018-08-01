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

  sightings.fetchAll = callback => {
    $.get(`${app.Environment}/api/ghosts`)
      .then(newData => sightings.loadAll(app.GhostSighting,newData));
    $.get(`${app.Environment}/api/ufos`).then(newData =>sightings.loadAll(app.UfoSighting,newData));
    $.get(`${app.Environment}/api/bigfoot`).then(newData => sightings.loadAll(app.BigFootSighting,newData));
  };
})(app);
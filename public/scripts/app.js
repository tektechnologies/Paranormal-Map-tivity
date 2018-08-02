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
        if(newData.description){
          one = new app.GhostSighting(newData);
          $('.detail-view').empty().append(new app.GhostSighting(newData).toHtml());
        }
        if(newData.text){
          one = new app.UfoSighting(newData);
          $('.detail-view').empty().append(new app.UfoSighting(newData).toHtml());
        }
        if(newData.observed){
          console.log(newData);
          console.log(new app.BigFootSighting(newData));
          $('.detail-view').empty().append(new app.BigFootSighting(newData).toHtml());
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
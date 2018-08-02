'use strict';

var app = app || {};

(function(module){

  var sightings={};

  module.sightings=sightings;

  sightings.loadAll = (ctor,newData) => {
    return newData.map(function(report) {
      return new ctor(report);
    });
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



  sightings.fetchAll = (bounds, callback) => {
    var boundsJson = bounds.toJSON();
    $.get(`${app.Environment}/api/spirit`, boundsJson)
      .then(newData => sightings.loadAll(app.GhostSighting,newData))
      .then(callback);
    $.get(`${app.Environment}/api/alien`, boundsJson)
      .then(newData =>sightings.loadAll(app.UfoSighting,newData))
      .then(callback);
    $.get(`${app.Environment}/api/bigfoot`, boundsJson)
      .then(newData => sightings.loadAll(app.BigFootSighting,newData))
      .then(callback);
  };
})(app);
'use strict';

var app = app || {};

(function(module){

  var pages = {}
  module.pages = pages;

  pages.initMapPage = () => {
    console.log('loading');
    $('#map').empty();
    app.showOnly('.map-view');
    $('.dropdown').show();
  }

  pages.initAboutPage = (event) => {
    $('.about').hide();
    app.showOnly('.about');
  }

  
})(app);
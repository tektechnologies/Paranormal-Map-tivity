'use strict';

var app = app || {};

(function(module){

  var pages = {};
  module.pages = pages;

  pages.initMap = () => {
    console.log('loading');
    app.showOnly('.map-view');
    $('.dropdown').show();
  };

  pages.initAboutPage = () => {
    app.showOnly('.about');
  };

  
})(app);